import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import xoSpaceBrowser from 'eslint-config-xo/space/browser';
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

// Required to load old extend formats
// see https://eslint.org/docs/latest/use/configure/migration-guide
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...xoSpaceBrowser,
  ...compat.extends("xo-react/space"),
  jsxA11yPlugin.flatConfigs.recommended,
  {
    name: 'alex-eslint-react',
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
    },
    settings: {
      "react": {
        "version": "detect"
      }
    },
    rules: {
      "no-underscore-dangle": "off",
      "react/button-has-type": "off",
      "react/destructuring-assignment": "off",
      "react/display-name": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "react/sort-comp": "off",
      "react/no-unstable-nested-components": "off"
    }
  },
]
