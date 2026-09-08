# Base44 Dev Environment

## Stack
- React 18 + Vite 6 frontend (pure client-side site — no backend, no DB)
- Animations: framer-motion + custom canvas particle field (`src/components/ParticleField.jsx`)

## Run
- `docker compose -f docker-compose.base44.yml up -d`
- Vite dev server listens on 5173 inside the container, mapped to host port 3000
- Source is bind-mounted at `/app`; `node_modules` live in the named volume `web_node_modules` so the mount stays clean
- `npm install` runs at every container start (no image build step needed)
- No secrets required — all content is static

## Verify it works
- `curl -s localhost:3000` returns the index page
- Preview: terminal typing boot sequence → hero reveal with role typewriter → about → skills grid → experience timeline (8 quarters over 2 years) → social footer
- A "follow me" prompt slides in bottom-right ~3s after load (dismissible)

## Experience timeline
- `src/components/ExperienceTimeline.jsx` renders the "Two years of building" section (`#timeline`) from `src/data/experience.js`
- Vertical quarter-by-quarter list: Year 1 nodes cyan, Year 2 nodes green; edit data file to change milestones

## Notes
- `vite.config.js` sets `server.allowedHosts: true` — required because the Base44 preview proxies a rotating hostname
- `CHOKIDAR_USEPOLLING=true` is set so Vite hot reload works through the bind mount
