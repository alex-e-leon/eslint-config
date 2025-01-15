/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    name: "alex-eslint-base",
    rules: {
      // From airbnb
      "no-shadow": "error",
      "no-use-before-define": [
        "error",
        { functions: true, classes: true, variables: true },
      ],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      camelcase: ["error", { properties: "never", ignoreDestructuring: false }],
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
      "implicit-arrow-linebreak": ["error", "beside"],
      "no-tabs": "error",
      "@stylistic/nonblock-statement-body-position": [
        "error",
        "beside",
        { overrides: {} },
      ],
      "@stylistic/object-property-newline": [
        "error",
        { allowAllPropertiesOnSameLine: true },
      ],
      "@stylistic/padded-blocks": [
        "error",
        "never",
        { allowSingleLineBlocks: false },
      ],
      "@stylistic/quotes": ["error", "single", { avoidEscape: true }],
      strict: ["error", "never"],
      "no-confusing-arrow": ["error", { allowParens: true }],
      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: [
            "default", // Use `export default` to provide a default export
            "then", // This will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
          ],
        },
      ],
      "prefer-arrow-callback": "error",
      "prefer-const": [
        "error",
        { destructuring: "all", ignoreReadBeforeAssign: true },
      ],
      "prefer-template": "error",
      "class-methods-use-this": ["error", { exceptMethods: [] }],
      "consistent-return": "error",
      curly: ["error", "multi-line"], // Multiline
      "default-param-last": "error",
      "no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions", "functions", "methods"],
        },
      ],
      "no-loop-func": "error",
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc", // For reduce accumulators
            "accumulator", // For reduce accumulators
            "e", // For e.returnvalue
            "ctx", // For Koa routing
            "context", // For Koa routing
            "req", // For Express requests
            "request", // For Express requests
            "res", // For Express responses
            "response", // For Express responses
            "$scope", // For Angular 1 scopes
            "staticContext", // For ReactRouter context
          ],
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "vars-on-top": "error",
    },
  },
];
