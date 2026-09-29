// postcss.config.js
// -----------------------------------------------------------------------------
// PostCSS is a tool that transforms our CSS during the build. We use two
// plugins here:
//   - tailwindcss:  turns Tailwind's utility class references into actual
//                   CSS rules (this is what makes classes like "flex" or
//                   "bg-primary" work).
//   - autoprefixer: automatically adds vendor prefixes (e.g. -webkit-) so
//                   the CSS works consistently across different browsers.
// You generally won't need to change this file.

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
