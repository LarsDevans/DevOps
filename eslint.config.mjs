import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser
    },
    files: ['src/**/*.{js,mjs}']
  },
  pluginJs.configs.recommended,
];
