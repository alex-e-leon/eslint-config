import base from './lint-rulesets/base.js';
import ts from './lint-rulesets/ts.js';
import importRules from './lint-rulesets/import.js';
import node from './lint-rulesets/node.js';
import unicorn from './lint-rulesets/unicorn.js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...base,
  ...importRules,
  ...ts,
  ...node,
  ...unicorn,
  prettierPluginRecommended,
]
