module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "jest": true,
    "es2020": true
  },
  "extends": [
    'airbnb-typescript',
    "plugin:prettier/recommended",
    "./lint-rulesets/ts.js",
    "./lint-rulesets/react.js",
    "./lint-rulesets/css-modules.js",
    "./lint-rulesets/unicorn.js"
  ]
}
