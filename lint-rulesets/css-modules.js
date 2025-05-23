/* eslint-disable import/no-anonymous-default-export, unicorn/filename-case */
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import cssModulesPlugin from "eslint-plugin-css-modules";

// Required to load old extend formats
// see https://eslint.org/docs/latest/use/configure/migration-guide
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends("plugin:css-modules/recommended"),
  {
    name: "alex-eslint-css-modules",
    plugins: {
      "css-modules": cssModulesPlugin,
    },
  },
];
