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
      "no-loop-func": "error",
      "no-param-reassign": "off",
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

      // Overrides xo rules
      "object-shorthand": [
        "error",
        "always",
        { avoidExplicitReturnArrows: false },
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "multiline-block-like", next: "*" },
        { blankLine: "any", prev: "if", next: "*" },
      ],
      "new-cap": [
        "error",
        {
          capIsNew: true,
          // Its a string pretending to be a regex
          // eslint-disable-next-line no-useless-escape
          capIsNewExceptionPattern: "^Intl\.",
          newIsCap: true,
        },
      ],
    },
  },
];
