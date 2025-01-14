import base from './lint-rulesets/base.js';
import ts from './lint-rulesets/ts.js';
import node from './lint-rulesets/node.js';
import unicorn from './lint-rulesets/unicorn.js';

export default [
  ...base,
  ...ts,
  ...node,
  ...unicorn,
]
