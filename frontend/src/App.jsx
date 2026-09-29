// src/App.jsx
// -----------------------------------------------------------------------------
// This is the root component of the site. Its job is to:
//   1. Wrap the whole app in a Router, so we can have multiple "pages"
//      without full page reloads.
//   2. Always show the Navbar (top menu) and Footer (bottom section).
//   3. Decide which page component to show based on the current URL, via
//      the <Routes> / <Route> list below.
//
// ADDING A NEW PAGE:
//   1. Create a new file in src/pages/, e.g. src/pages/Faq.jsx.
//   2. Import it below, next to the other page imports.
//   3. Add a new <Route path="/faq" element={<Faq />} /> line inside
//      <Routes> below.
//   4. (Optional) add a link to it in src/components/Navbar.jsx.
//
// NOTE ON HashRouter:
//   We use HashRouter (not BrowserRouter) so that routes look like
//   "yoursite.com/#/about" instead of "yoursite.com/about". This means the
//   web server only ever needs to serve a single index.html file - it
//   never sees the "/about" part of the URL - which is exactly what static
//   hosts like GitHub Pages and Cloudflare Pages need, with zero extra
//   server configuration.

import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Page components - each one is a full page of the site.
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Achievements from "./pages/Achievements";

// Shared layout pieces shown on every page.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    // HashRouter enables client-side navigation via URL hashes (#/about).
    <Router>
      {/* Top navigation bar, shown above every page. */}
      <Navbar />

      {/* Only ONE of the routes below is rendered at a time, based on the
          current URL (the part after the "#"). */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        {/* ":id" is a URL parameter - e.g. "/products/5" - read inside
            ProductDetail.jsx via useParams(). */}
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>

      {/* Footer, shown below every page. */}
      <Footer />
    </Router>
  );
}

export default App;
