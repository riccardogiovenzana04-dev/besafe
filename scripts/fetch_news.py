"""Collect protest and riot headlines for Milano and Paris from outlets' own RSS feeds.

Writes news.json next to index.html. Run by GitHub Actions on a schedule;
items are kept for 7 days, so headlines don't vanish when a feed rolls over.
Only the headline, outlet, link and time are stored, never article text.
"""
import email.utils
import json
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "news.json"
KEEP_DAYS = 7
PER_CITY = 40
UA = "Mozilla/5.0 (compatible; BESAFE/1.0; +https://github.com/riccardogiovenzana04-dev/besafe)"

IT = r"scontr|saccheg|guerriglia|disordin|vetrine|devastaz|corteo|cortei|manifestaz|caro ?vita|black bloc|teppist|tafferugl|cariche|maranza|lacrimogen"
FR = r"émeute|emeute|pillag|casseur|manifestation|manifestant|violences urbaines|black bloc|vie chère|mouvement lycéen|lycéens|blocage|lacrymog|interpellations"
EN = r"riot|loot|protest|clash|unrest|tear gas"

# (outlet, url, city, must match, must also match or None)
FEEDS = [
    ("ANSA Lombardia", "https://www.ansa.it/lombardia/notizie/lombardia_rss.xml", "milano", IT, r"milan"),
    ("ANSA", "https://www.ansa.it/sito/notizie/cronaca/cronaca_rss.xml", "milano", IT, r"milan"),
    ("Sky TG24", "https://tg24.sky.it/rss/tg24_cronaca.xml", "milano", IT, r"milan"),
    ("MilanoToday", "https://www.milanotoday.it/rss", "milano", IT, None),
    ("Il Giorno", "https://www.ilgiorno.it/rss/milano", "milano", IT, None),
    ("Le Parisien", "https://www.leparisien.fr/paris-75/rss.xml", "paris", FR, None),
    ("France 24", "https://www.france24.com/fr/france/rss", "paris", FR, r"paris|france|national"),
    ("franceinfo", "https://www.francetvinfo.fr/titres.rss", "paris", FR, r"paris|france|national|lycé"),
    ("Le Monde", "https://www.lemonde.fr/societe/rss_full.xml", "paris", FR, r"paris|france|national|lycé"),
    ("Le Figaro", "https://www.lefigaro.fr/rss/figaro_actualites.xml", "paris", FR, r"paris|france|national|lycé"),
    ("France 24 (EN)", "https://www.france24.com/en/france/rss", "paris", EN, r"paris|france|french"),
    ("Al Jazeera", "https://www.aljazeera.com/xml/rss/all.xml", "paris", EN, r"paris|france|french"),
    ("BBC News", "https://feeds.bbci.co.uk/news/world/europe/rss.xml", "paris", EN, r"paris|france|french"),
    ("Al Jazeera", "https://www.aljazeera.com/xml/rss/all.xml", "milano", EN, r"milan"),
    ("BBC News", "https://feeds.bbci.co.uk/news/world/europe/rss.xml", "milano", EN, r"milan"),
]


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()


def text(el, tag):
    found = el.find(tag)
    return (found.text or "").strip() if found is not None and found.text else ""


def parse_date(raw):
    if not raw:
        return None
    try:
        d = email.utils.parsedate_to_datetime(raw)
    except (TypeError, ValueError):
        try:
            d = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        except ValueError:
            return None
    return d if d.tzinfo else d.replace(tzinfo=timezone.utc)


def clean(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def main():
    now = datetime.now(timezone.utc)
    cutoff = now - timedelta(days=KEEP_DAYS)
    cache, items, failed = {}, [], []

    for outlet, url, city, must, also in FEEDS:
        try:
            if url not in cache:
                cache[url] = ET.fromstring(fetch(url))
        except Exception as e:  # one dead feed must not stop the rest
            failed.append(f"{outlet}: {e}")
            cache[url] = None
        root = cache[url]
        if root is None:
            continue
        for it in root.iter("item"):
            title = clean(text(it, "title"))
            link = text(it, "link")
            haystack = (title + " " + clean(text(it, "description"))).lower()
            if not title or not link or not re.search(must, haystack):
                continue
            if also and not re.search(also, haystack):
                continue
            published = parse_date(text(it, "pubDate"))
            if published and published < cutoff:
                continue
            items.append({
                "city": city,
                "title": title,
                "outlet": outlet,
                "url": link,
                "published": (published or now).isoformat(timespec="seconds"),
            })

    # keep earlier items that are still inside the window
    if OUT.exists():
        try:
            for old in json.loads(OUT.read_text()).get("items", []):
                if parse_date(old.get("published")) and parse_date(old["published"]) >= cutoff:
                    items.append(old)
        except (ValueError, KeyError):
            pass

    seen, unique = set(), []
    for it in sorted(items, key=lambda x: x["published"], reverse=True):
        key = (it["city"], it["url"])
        title_key = (it["city"], it["title"].lower())
        if key in seen or title_key in seen:
            continue
        seen.update([key, title_key])
        unique.append(it)

    final = []
    for city in ("milano", "paris"):
        final += [i for i in unique if i["city"] == city][:PER_CITY]
    final.sort(key=lambda x: x["published"], reverse=True)

    previous = None
    if OUT.exists():
        try:
            previous = json.loads(OUT.read_text()).get("items")
        except ValueError:
            pass
    if previous == final:
        print("No new headlines.")
        return

    OUT.write_text(json.dumps({"updatedAt": now.isoformat(timespec="seconds"), "items": final}, ensure_ascii=False, indent=1) + "\n")
    print(f"Wrote {len(final)} headlines ({sum(i['city'] == 'milano' for i in final)} Milano, {sum(i['city'] == 'paris' for i in final)} Paris).")
    for f in failed:
        print("Feed failed:", f, file=sys.stderr)


if __name__ == "__main__":
    main()
