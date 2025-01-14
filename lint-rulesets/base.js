import importPlugin from 'eslint-plugin-import';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';

export default [
  importPlugin.flatConfigs.recommended,
  prettierPluginRecommended,
  {
    name: 'alex-eslint-base',
    rules: {
      "import/no-named-as-default-member": "off",
      "import/prefer-default-export": "off",
      "import/export": "off",
      "no-restricted-syntax": [
        "error",
        {
          "selector": "ForInStatement",
          "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries, and iterate over the resulting array."
        },
        {
          "selector": "LabeledStatement",
          "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
        },
        {
          "selector": "WithStatement",
          "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
        }
      ],

      // from airbnb
      'no-shadow': 'error',
      'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],


      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
      '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'no-tabs': 'error',
      '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
      '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/padded-blocks': ['error', 'never', { allowSingleLineBlocks: false }],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      'strict': ['error', 'never']
    }
  }]
