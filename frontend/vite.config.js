// vite.config.js
// -----------------------------------------------------------------------------
// This file configures Vite, the build tool that turns our React source code
// (in /src) into the static HTML/CSS/JS files that get uploaded to a host
// like GitHub Pages or Cloudflare Pages.
//
// WHY "base" MATTERS FOR HOSTING
// -------------------------------
// The app uses react-router-dom's HashRouter (see src/App.jsx), so page
// routes always live after a "#" (e.g. /#/about). That means the web server
// itself never needs to know about React Router's routes - it only ever has
// to serve one file: index.html. This makes the app compatible with almost
// any static host out of the box.
//
// The one thing that DOES differ between hosts is the "base" path - i.e.
// where the site lives relative to the domain:
//   - GitHub Pages (project site) serves the site from a sub-folder named
//     after the repository, e.g. https://<username>.github.io/Lubricant-website/
//     so all asset URLs (JS, CSS, images) must be prefixed with
//     "/Lubricant-website/".
//   - Cloudflare Pages (and most other hosts, e.g. Netlify/Vercel) serve the
//     site from the domain root, e.g. https://your-project.pages.dev/
//     so asset URLs must start with just "/".
//
// To support both without maintaining two separate configs, we pick the
// "base" value using Vite's built-in --mode flag:
//   npm run build          -> mode "production", base "/"                (Cloudflare Pages, Netlify, Vercel, custom domains, etc.)
//   npm run build:ghpages  -> mode "ghpages",     base "/Lubricant-website/" (GitHub Pages project site)
//
// If you rename the GitHub repository, update GITHUB_REPO_NAME below to match.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this if your GitHub repository has a different name than
// "Lubricant-website". It must match exactly (including capitalization).
const GITHUB_REPO_NAME = 'Lubricant-website'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Enables React (JSX, Fast Refresh, etc.) support in Vite.
  plugins: [react()],

  // Use the GitHub Pages sub-path only when building with `--mode ghpages`
  // (see the "build:ghpages" script in package.json). Every other build
  // (including plain `npm run build`, used by Cloudflare Pages) uses "/".
  base: mode === 'ghpages' ? `/${GITHUB_REPO_NAME}/` : '/',
}))
