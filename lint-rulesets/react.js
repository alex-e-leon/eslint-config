module.exports = {
  "extends": [
    "plugin:react/recommended",
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "react-hooks"
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React", 
      "fragment": "Fragment",
      "version": "detect"
    }
  },
  "rules": {
    "no-underscore-dangle": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "react/require-default-props": ["error", { "ignoreFunctionalComponents": true }],
    "react/sort-comp": "off"
  }
}
