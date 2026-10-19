# Pezzi di Fango

A map-first tracker for the riots in Milano and Paris (17–18 October 2026): affected streets and squares, shops looted or damaged, arrests and the share of minors, damage estimates, the causes major outlets give, and links to live webcams.

Every figure links to the news report it comes from. Numbers nobody has published are shown as "Not published", never estimated.

## Run it locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Update the data

All incidents, shops, figures and sources live in `data.js`. An open page re-reads it every 60 seconds, so saved changes appear without a reload.

## Credits

Map data © OpenStreetMap contributors, drawn with Leaflet. Webcams belong to their providers (SkylineWebcams, Meteopool).

Not an emergency service. If you are in danger, call 112.
