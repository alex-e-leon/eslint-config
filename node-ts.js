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
    "import/extensions": ["error", "always", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    "no-console": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", { "case": "camelCase" }],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-nested-ternary": "off"
  }
};
