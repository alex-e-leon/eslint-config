module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "jest": true,
    "es2020": true
  },
  "parserOptions": {
    "project": './tsconfig.json',
  },
  "extends": [
    'airbnb-typescript',
    "plugin:css-modules/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "css-modules",
    "react-hooks"
  ],
  "rules": {
    "import/extensions": ["error", "always", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    "no-underscore-dangle": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/sort-comp": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", { "case": "camelCase" }],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-nested-ternary": "off"
  }
}
