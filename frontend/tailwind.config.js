// tailwind.config.js
// -----------------------------------------------------------------------------
// Configuration for Tailwind CSS - the utility-class CSS framework used
// throughout this site (e.g. className="text-2xl font-bold text-primary").
// This file is where you customize the site's design "tokens": colors,
// fonts, and reusable animations, so they stay consistent everywhere.
//
// After changing a color/font/animation name here, you can immediately use
// it as a Tailwind class anywhere in the .jsx files, e.g.:
//   <div className="bg-primary text-accent font-poppins animate-zoomIn">

import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind scans these files for class names it needs to generate CSS
  // for. If you add a new folder of components/pages, make sure it's
  // covered by this pattern (or Tailwind won't know to generate styles
  // for classes used only in that folder).
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // Enables toggling a dark theme by adding the "dark" class to an
  // ancestor element (e.g. <html class="dark">). Currently the site
  // doesn't include a dark-mode toggle, but the classes (dark:bg-... etc.)
  // would work immediately if one were added.
  darkMode: "class",

  theme: {
    extend: {
      // Custom brand colors. Use them like `bg-primary`, `text-accent`, etc.
      colors: {
        primary: "#0B1F3A", // Dark navy - main brand color (headers, navbar)
        accent: "#F4B400",  // Gold/yellow - highlights, buttons
        orange: "#F97316",  // Secondary accent color
        light: "#F5F7FA",   // Light background sections
        text: "#111827",    // Default body text color
        muted: "#6B7280",   // Secondary/faded text color
      },

      // Custom font family. Use it via the `font-poppins` class.
      // The actual font file is loaded via Google Fonts in src/index.css.
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      // Custom CSS @keyframes animation definitions.
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      // Turns the keyframes above into a ready-to-use Tailwind class:
      // `animate-zoomIn` (0.8s, ease-out, keeps its final state).
      animation: {
        zoomIn: "zoomIn 0.8s ease-out forwards",
      },
    },
  },

  // Adds support for the `tailwindcss-animate` plugin's extra animation
  // utility classes.
  plugins: [tailwindcssAnimate],
};
