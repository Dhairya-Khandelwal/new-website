# Frontend (React + Vite)

This folder contains the actual Lubricant Website app. For full project
documentation - including how to deploy to **GitHub Pages** and
**Cloudflare Pages** - see the [root README.md](../README.md).

## Quick start

```bash
npm install
npm run dev
```

## Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Starts a local dev server with hot-reload. |
| `npm run build` | Production build for Cloudflare Pages / most hosts (base path `/`). Output goes to `dist/`. |
| `npm run build:ghpages` | Production build for GitHub Pages (base path `/Lubricant-website/`). Output goes to `dist/`. |
| `npm run preview` | Serves the last `dist/` build locally, so you can check a production build before deploying. |
| `npm run lint` | Runs ESLint to catch common code issues. |
| `npm run deploy:ghpages` | Builds (via `build:ghpages`) and publishes `dist/` to the `gh-pages` branch (manual alternative to the GitHub Actions workflow). |

See the comments inside `vite.config.js` for exactly how the two build
modes differ.
