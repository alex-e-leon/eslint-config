module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "jest": true,
    "es2020": true
  },
  "extends": [
    "airbnb",
    "./lint-rulesets/base.js",
    "./lint-rulesets/react.js",
    "./lint-rulesets/css-modules.js",
    "./lint-rulesets/flow.js",
    "./lint-rulesets/unicorn.js"
  ]
}
