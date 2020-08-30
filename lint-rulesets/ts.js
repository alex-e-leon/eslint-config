module.exports = {
  "parserOptions": {
    "project": './tsconfig.json'
  },
  "rules": {
    "import/extensions": ["error", "always", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }]
  }
}
