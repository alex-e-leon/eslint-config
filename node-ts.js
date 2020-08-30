module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true,
    "es2020": true
  },
  "extends": [
    'airbnb-typescript/base',
    "plugin:prettier/recommended",
    "./lint-rulesets/ts.js",
    "./lint-rulesets/node.js",
    "./lint-rulesets/unicorn.js"
  ]
}
