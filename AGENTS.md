# AGENTS.md — Base44 Dev Environment

## Stack
- **Frontend:** React 18 + Vite 6 (dev server on port 5173, mapped to host 3000)
- **Animations:** Framer Motion (available; particle field uses raw canvas)
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (mono) — loaded via Google Fonts in index.html

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- Node 22 Alpine base image, source bind-mounted, `npm install` + `npm run dev` at startup
- Live reload via Vite HMR + chokidar polling
- Health check: `wget` against `http://127.0.0.1:5173/`
- No external secrets required — app boots with zero config

## Architecture
- `src/App.jsx` — root shell: CursorRing, ParticleField (canvas), Nav, Hero, ExperienceTimeline, Footer
- `src/data/experience.js` — 8 experience milestones across 24 months (the timeline data source)
- `src/components/ExperienceTimeline.jsx` — horizontal scroll timeline with SVG connection thread, frontend (top) / backend (bottom) split, drag-to-scroll, click-to-detail
- `src/components/DetailPanel.jsx` — slide-in side panel with stacked tech layers, metrics, contribution details, and links
- `src/components/CodeBackground.jsx` — blurred parallax code background behind the timeline
- `src/components/Hero.jsx` — radial dial that rotates with mouse, "730 DAYS OF DEPLOYMENT", Start Sequence button scrolls to timeline
- `src/components/Footer.jsx` — terminal-style contact form

## Theme
- Colors: `#05070A` (bg), `#00F5FF` (cyan accent), `#7000FF` (violet accent), `#F8FAFC` (text), `#64748B` (muted)
- All theme tokens in `:root` CSS variables in `src/index.css`

## Verification
- After boot, curl `http://localhost:3000/` — should return HTML with `<div id="root">`
- Timeline is at `/#timeline`, contact at `/#contact`
- Click any timeline node or card to open the detail side panel
