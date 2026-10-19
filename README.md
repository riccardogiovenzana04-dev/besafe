# BESAFE

A map-first tracker for the riots in Milano and Paris (17–18 October 2026): affected streets and squares, shops looted or damaged, arrests and the share of minors, damage estimates, the causes major outlets give, and links to live webcams.

Every figure links to the news report it comes from. Numbers nobody has published are shown as "Not published", never estimated.

## Run it locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Update the data

All incidents, shops, figures and sources live in `data.js`. An open page re-reads it every 60 seconds, so saved changes appear without a reload.

## Spank leaderboard

The rag-doll game keeps a shared ranking through two small Vercel functions in `api/` backed by Upstash Redis (free tier, connected through the Vercel Marketplace). Score = spanks + 112 for every 50 spanks. Nicknames are 3–16 characters and filtered; clicks are rate-limited per player and per network.

## Credits

Map data © OpenStreetMap contributors, drawn with Leaflet. Webcams belong to their providers (SkylineWebcams, Meteopool).

Not an emergency service. If you are in danger, call 112.
