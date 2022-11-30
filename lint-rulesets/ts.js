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
    "import/no-duplicates": "off",
    "@typescript-eslint/array-type": ["error", {"default": "array-simple"}],
    "@typescript-eslint/object-curly-spacing": ["error", "never"],
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
