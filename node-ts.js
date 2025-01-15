import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import xoSpace from "eslint-config-xo/space";
import tseslint from "typescript-eslint";
import xoTypeScriptSpace from 'eslint-config-xo-typescript/space';
import base from "./lint-rulesets/base.js";
import ts from './lint-rulesets/ts.js';
import importRules from "./lint-rulesets/import.js";
import node from "./lint-rulesets/node.js";
import unicorn from "./lint-rulesets/unicorn.js";

export default tseslint.config(
  ...xoSpace,
  ...xoTypeScriptSpace,
  ...base,
  ...importRules,
  ...ts,
  ...unicorn,
  ...node,
  prettierPluginRecommended,
);
