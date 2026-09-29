# Lubricant Website

A React + Vite single-page website for an HP Lubricants distributor
(Vikas Automobiles, Satna). This README explains the project layout and,
most importantly, **how to host it for free on GitHub Pages and/or
Cloudflare Pages.**

---

## 1. Project layout

```
Lubricant-website/
├── frontend/              <- The actual website (React + Vite). This is
│                              the folder that gets built and deployed.
│   ├── src/
│   │   ├── pages/         <- One file per page (Home, About, Contact, ...)
│   │   ├── components/    <- Reusable pieces (Navbar, Footer, ProductCard)
│   │   ├── data/data.js   <- Product catalogue used by the Products pages
│   │   └── assets/        <- Images used throughout the site
│   ├── public/             <- Files copied as-is (favicon, static images)
│   ├── vite.config.js      <- Build configuration (see comments inside)
│   └── package.json        <- Frontend dependencies & npm scripts
├── backend/server/         <- OPTIONAL Node/Express email server (see §4)
├── .github/workflows/      <- GitHub Actions: auto-deploys to GitHub Pages
└── package.json             <- Convenience scripts for the whole repo
```

The site is a **static single-page app (SPA)**: once built, it is just
HTML/CSS/JS/image files with no server-side code required to run it. It
uses React Router's `HashRouter` (routes look like `/#/about`), which means
the web server never needs to understand React Router's routes - it only
ever serves one `index.html` file. That's what makes it easy to host on
*any* static host, including both GitHub Pages and Cloudflare Pages.

---

## 2. Local development

```bash
# from the repository root, one-time setup:
npm run install:all

# start a local dev server (usually http://localhost:5173):
npm run dev
```

(These root scripts just forward to `frontend/`. You can also `cd frontend`
and run `npm install` / `npm run dev` directly - see `frontend/package.json`.)

---

## 3. Deploying — GitHub Pages *and* Cloudflare Pages

This repo is set up so you can use **either or both** hosts. The only
difference between them is the "base path" (the sub-folder the site is
served from) - see the comments in `frontend/vite.config.js` for details.

### Option A — GitHub Pages (fully automatic)

A ready-made GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`)
builds and deploys the site automatically whenever you push to `main`.

1. Push this repository to GitHub (repo name **must** be
   `Lubricant-website` to match the default config - or see step 3 below).
2. In your GitHub repo: **Settings → Pages → Build and deployment → Source**,
   choose **"GitHub Actions"**.
3. If you named your repository something other than `Lubricant-website`,
   open `frontend/vite.config.js` and change the `GITHUB_REPO_NAME`
   constant to match.
4. Push a commit to `main`. Watch progress in the **Actions** tab.
5. Your site goes live at:
   `https://<your-github-username>.github.io/Lubricant-website/`

**Manual alternative** (if you don't want to use GitHub Actions): run
`npm run deploy:ghpages` from `frontend/` (or the repo root). This uses the
`gh-pages` npm package to push a production build to a `gh-pages` branch,
which you then select as the Pages source under **Settings → Pages**.

### Option B — Cloudflare Pages (also automatic, via Cloudflare's dashboard)

Cloudflare Pages builds your site itself whenever you push to GitHub, so no
extra workflow file is needed here - just these dashboard settings:

1. Go to the [Cloudflare dashboard](https://dash.cloudflare.com/) →
   **Workers & Pages → Create → Pages → Connect to Git**, and pick this
   repository.
2. Use these build settings:
   | Setting | Value |
   |---|---|
   | Framework preset | Vite |
   | Root directory | `frontend` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
3. (Recommended) Add an environment variable `NODE_VERSION` = `20` so
   Cloudflare uses the same Node version as GitHub Actions. A `.nvmrc` file
   is also included, which Cloudflare Pages reads automatically.
4. Click **Save and Deploy**. Your site goes live at a URL like
   `https://<project-name>.pages.dev/` (you can attach a custom domain
   afterwards under **Custom domains**).

Note: `npm run build` (not `build:ghpages`) is used here, because Cloudflare
Pages serves the site from the domain root (`/`), unlike GitHub Pages'
project sub-path.

### Why one project can serve two hosts

`frontend/vite.config.js` picks the right "base" URL automatically based on
which build script you run:

| Command | Used by | Base path |
|---|---|---|
| `npm run build` | Cloudflare Pages (and Netlify/Vercel/custom servers) | `/` |
| `npm run build:ghpages` | GitHub Pages | `/Lubricant-website/` |

---

## 4. About the `backend/server` folder (optional, not required for hosting)

The Contact page (`frontend/src/pages/Contact.jsx`) submits its form
directly to [FormSubmit](https://formsubmit.co/) (a free third-party form
service), so **the site works fully on GitHub Pages / Cloudflare Pages
without any backend server.**

`backend/server` contains an *optional* Node/Express + Nodemailer server
that can send contact-form emails through your own Gmail account instead of
FormSubmit, if you'd rather run your own mail server. Since GitHub Pages
and Cloudflare Pages only host static files, this backend cannot run on
either of them - it would need to be hosted separately (for example, on
Render, Railway, Fly.io, or a Cloudflare Worker) and the frontend's
`VITE_FORMSPREE_URL` environment variable pointed at it. Most people can
safely ignore this folder entirely.

To run it locally:
```bash
cd backend/server
npm install
node server.js   # (see backend/server/readme.txt for Gmail setup steps)
```

---

## 5. Where things are configured

Every source file in this project now has explanatory comments at the top
explaining what it does, so it's a good place to start reading. A few
highlights:

- `frontend/vite.config.js` — build configuration, GitHub Pages vs.
  Cloudflare Pages base path logic.
- `frontend/src/App.jsx` — defines the site's routes (URLs → pages).
- `frontend/src/data/data.js` — the product catalogue shown on the
  Products pages. Add/edit products here.
- `frontend/src/pages/Contact.jsx` — the contact form and its submission
  endpoint.
- `frontend/tailwind.config.js` — site-wide colors, fonts, and animations.
