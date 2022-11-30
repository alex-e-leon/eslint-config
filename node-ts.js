module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true,
    "es2020": true
  },
  "extends": [
    'airbnb-typescript/base',
    "./lint-rulesets/base.js",
    "./lint-rulesets/ts.js",
    "./lint-rulesets/node.js",
    "./lint-rulesets/unicorn.js"
  ]
}
