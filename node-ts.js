module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true,
    "es2020": true
  },
  "parserOptions": {
    "project": './tsconfig.json',
  },
  "extends": [
    'airbnb-typescript/base',
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended"
  ],
  "rules": {
    "import/extensions": ["error", "always", { "js": "never" }],
    "no-console": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", { "case": "camelCase" }],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-nested-ternary": "off"
  }
};
