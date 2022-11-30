module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true,
    "es2020": true
  },
  "extends": [
    "airbnb-base",
    "./lint-rulesets/base.js",
    "./lint-rulesets/node.js",
    "./lint-rulesets/flow.js",
    "./lint-rulesets/unicorn.js"
  ]
}
