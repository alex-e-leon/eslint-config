module.exports = {
  "plugins": [
    "unicorn"
  ],
  "extends": [
    "plugin:unicorn/recommended"
  ],
  "rules": {
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", {"cases": {"camelCase": true, "pascalCase": true}}],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-switch": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/new-for-builtins": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/no-null": "off",
    "unicorn/no-reduce": "off"
  }
}
