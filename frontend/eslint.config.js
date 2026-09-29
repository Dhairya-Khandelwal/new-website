// eslint.config.js
// -----------------------------------------------------------------------------
// ESLint checks the JavaScript/JSX code for common mistakes and style
// issues (e.g. unused variables, missing dependencies in useEffect).
// Run it with: npm run lint
// It won't stop your site from building or running - it's purely a helper
// to catch bugs early. You generally won't need to change this file.

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Don't lint the build output folder.
  globalIgnores(['dist']),
  {
    // Apply these rules to every JavaScript and JSX file in the project.
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,              // ESLint's standard recommended rules
      reactHooks.configs.flat.recommended, // Rules specific to React Hooks (useState, useEffect, ...)
      reactRefresh.configs.vite,           // Rules that keep Vite's fast-refresh (hot reload) working
    ],
    languageOptions: {
      globals: globals.browser, // Recognizes browser globals like `window`, `document`.
      parserOptions: { ecmaFeatures: { jsx: true } }, // Enables JSX syntax parsing.
    },
  },
])
