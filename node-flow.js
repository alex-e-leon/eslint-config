module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true,
    "es2020": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "airbnb-base",
    "plugin:flowtype/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier/flowtype"
  ],
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "flowtype/require-valid-file-annotation": ["error", "always", { "annotationStyle": "line", "strict": true }],
    "import/extensions": ["error", "always", { "js": "never" }],
    "no-console": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", { "case": "camelCase" }],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/no-nested-ternary": "off"
    "unicorn/no-fn-reference-in-iterator": "off",
  }
}
