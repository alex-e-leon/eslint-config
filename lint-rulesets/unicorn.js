module.exports = {
  "extends": [
    "plugin:unicorn/recommended"
  ],
  "rules": {
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", { "case": "camelCase" }],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-nested-ternary": "off"
  }
}
