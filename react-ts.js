import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import base from "./lint-rulesets/base.js";
import tseslint from "typescript-eslint";
import ts from './lint-rulesets/ts.js';
import react from "./lint-rulesets/react.js";
import importRules from "./lint-rulesets/import.js";
import cssModules from "./lint-rulesets/css-modules.js";
import unicorn from "./lint-rulesets/unicorn.js";
import xoSpaceBrowser from "eslint-config-xo/space/browser";
import xoTypeScriptSpace from 'eslint-config-xo-typescript/space';
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

// Required to load old extend formats
// see https://eslint.org/docs/latest/use/configure/migration-guide
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default tseslint.config(
  ...xoSpaceBrowser,
  ...xoTypeScriptSpace,
  ...compat.extends("xo-react/space"),
  ...base,
  ...importRules,
  ...ts,
  ...unicorn,
  ...react,
  ...cssModules,
  prettierPluginRecommended,
);
