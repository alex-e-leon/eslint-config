module.exports = {
  "root": true,
  "env": {
    "browser": true,
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
    "airbnb",
    "plugin:css-modules/recommended",
    "plugin:flowtype/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "prettier/flowtype",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "flowtype",
    "css-modules",
    "react-hooks"
  ],
  "rules": {
    "flowtype/require-valid-file-annotation": ["error", "always", { "annotationStyle": "line", "strict": true }],
    "import/extensions": ["error", "always", { "js": "never" }],
    "no-underscore-dangle": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react/sort-comp": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": ["error", { "case": "camelCase" }],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-nested-ternary": "off"
  }
}
