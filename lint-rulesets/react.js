/* eslint-disable import/no-anonymous-default-export */
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";
import { allExtensions } from "./util.js";

export default [
  jsxA11yPlugin.flatConfigs.recommended,
  {
    files: [`**/*.{${allExtensions.join(",")}}`],
    name: "alex-eslint-react",
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2023 },
    },
    rules: {
      "jsx-a11y/lang": "error",
      "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
      "react/button-has-type": "off",
      "react/display-name": "off",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
      "no-console": ["error", { allow: ["error"] }],

      // From airbnbs old rules
      "class-methods-use-this": [
        "error",
        {
          exceptMethods: [
            "render",
            "getInitialState",
            "getDefaultProps",
            "getChildContext",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "componentDidUpdate",
            "componentWillUnmount",
            "componentDidCatch",
            "getSnapshotBeforeUpdate",
          ],
        },
      ],

      "react/forbid-prop-types": [
        "error",
        {
          forbid: ["any", "array", "object"],
          checkContextTypes: true,
          checkChildContextTypes: true,
        },
      ],

      "react/jsx-closing-bracket-location": ["error", "line-aligned"],
      "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
      "react/no-will-update-set-state": "error",
      "react/prefer-es6-class": ["error", "always"],
      "react/prefer-stateless-function": [
        "error",
        { ignorePureComponents: true },
      ],
      "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
      "react/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
      "react/jsx-curly-newline": [
        "error",
        {
          multiline: "consistent",
          singleline: "consistent",
        },
      ],
      "react/jsx-props-no-spreading": [
        "error",
        {
          html: "enforce",
          custom: "enforce",
          explicitSpread: "ignore",
          exceptions: [],
        },
      ],
      "react/prefer-exact-props": "error",
      "react/state-in-constructor": ["error", "never"],
      "react/self-closing-comp": "error",
      "react/require-render-return": "error",
      "react/boolean-prop-naming": "off",

      // Overwrite for xos rules
      "unicorn/consistent-destructuring": "off",
      "react/require-default-props": "off",
      "react/prefer-read-only-props": "off",
    },
  },
];
