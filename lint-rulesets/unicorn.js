/* eslint-disable import/no-anonymous-default-export */
import unicornPlugin from "eslint-plugin-unicorn";

export default [
  unicornPlugin.configs["flat/recommended"],
  {
    name: "alex-eslint-unicorn",
    rules: {
      "unicorn/better-regex": "error",
      "unicorn/consistent-destructuring": "off",
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": [
        "error",
        { cases: { camelCase: true, pascalCase: true } },
      ],
      "unicorn/import-style": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/prefer-number-properties": "off",
      "unicorn/prefer-spread": "off",
      "unicorn/prefer-object-from-entries": "off",
      "unicorn/prefer-switch": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/new-for-builtins": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-fn-reference-in-iterator": "off",
      "unicorn/no-object-as-default-parameter": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-null": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-useless-switch-case": "off",
      // Un-needed as provided by import/no-anonymous-default-export
      "unicorn/no-anonymous-default-export": "off",
    },
  },
];
