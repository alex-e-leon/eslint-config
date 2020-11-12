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
    }],
    "import/no-duplicates": "off"
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
}
