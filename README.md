# Feeless

$0 fees. Forever. The meme born from the day Robinhood killed trading commissions.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Before you launch — edit `src/config.js`

Everything site-wide reads from this one file:

- `LINKS.x` / `LINKS.chart` — your real X/community and DexScreener chart links.
- `CA` — the real token contract address. It's copyable from the nav, hero, and footer automatically.

## Pages

- `/` — Home: hero, hazard-tape ticker, quick teaser.
- `/lore` — Lore: full origin story timeline, the problem Robinhood solved,
  impact stats, and the closing "why this still matters" section.

Add more pages by dropping a new file in `src/pages/` and a `<Route>` in `src/App.jsx`.

## Stack

Vite + React + React Router. No Tailwind — a single hand-tuned `src/index.css`
with CSS variables for the whole design system (colors, fonts, spacing), so
there's nothing extra to configure.
