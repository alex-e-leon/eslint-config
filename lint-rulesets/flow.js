module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "plugin:flowtype/recommended",
  ],
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "import/extensions": ["error", "always", { "js": "never" }],
    "flowtype/require-valid-file-annotation": ["error", "always", { "annotationStyle": "line", "strict": true }]
  }
}
