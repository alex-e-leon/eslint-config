import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import xoSpaceBrowser from 'eslint-config-xo/space/browser';
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

// Required to load old extend formats
// see https://eslint.org/docs/latest/use/configure/migration-guide
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...xoSpaceBrowser,
  ...compat.extends("xo-react/space"),
  jsxA11yPlugin.flatConfigs.recommended,
  {
    name: 'alex-eslint-react',
    settings: {
      "react": {
        "version": "detect"
      }
    },
    rules: {
      'jsx-a11y/lang': 'error',
      "react/button-has-type": "off",
      "react/display-name": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

      // From airbnbs old rules
      'class-methods-use-this': ['error', {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate'
        ],
      }],

      'react/forbid-prop-types': ['error', {
        forbid: ['any', 'array', 'object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      }],

      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': ['error', 'always'],
      'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/jsx-curly-newline': ['error', {
        multiline: 'consistent',
        singleline: 'consistent',
      }],
      'react/jsx-props-no-spreading': ['error', {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      }],
      'react/prefer-exact-props': 'error',
      'no-console': 'warn',
    }
  },
]
