import base from './lint-rulesets/base.js';
import ts from './lint-rulesets/ts.js';
import react from './lint-rulesets/react.js';
import importRules from './lint-rulesets/import.js';
import cssModules from './lint-rulesets/css-modules.js';
import unicorn from './lint-rulesets/unicorn.js';

export default [
  ...base,
  ...importRules,
  ...ts,
  ...react,
  ...cssModules,
  ...unicorn,
]
