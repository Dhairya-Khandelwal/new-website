// src/main.jsx
// -----------------------------------------------------------------------------
// This is the entry point of the React application - the very first
// JavaScript file that runs in the browser (loaded from index.html).
// Its only job is to render the top-level <App /> component into the
// <div id="root"> element defined in index.html.
//
// You will rarely need to change this file. If you want to change what
// the site looks like, edit src/App.jsx or the files inside src/pages and
// src/components instead.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global CSS (Tailwind is imported from here).
import App from './App.jsx' // The component that defines our page routes.

// Find the <div id="root"></div> from index.html and render our app into it.
createRoot(document.getElementById('root')).render(
  // <StrictMode> is a React development helper that highlights potential
  // problems in the app. It has no effect on the production build.
  <StrictMode>
    <App />
  </StrictMode>,
)
