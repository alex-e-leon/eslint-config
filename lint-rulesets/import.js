/* eslint-disable import/no-anonymous-default-export */
import importPlugin from "eslint-plugin-import";
import { jsExtensions, jsPlusJsonExtensions } from "./util.js";

export default [
  {
    name: "alex-eslint-import",
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/extensions": jsExtensions.map((ext) => `.${ext}`),
      "import/resolver": {
        node: { extensions: jsPlusJsonExtensions.map((ext) => `.${ext}`) },
      },
    },
    rules: {
      // Inspired by airbnb + xo. Would love to just extend of import plugin recommended,
      // but the recommended really doesnt add much
      "import/export": "error",
      "import/extensions": ["error", "always", { ignorePackages: true }],
      "import/first": "error",
      "import/no-absolute-path": "error",
      "import/no-anonymous-default-export": ["error", { allowObject: true }],
      "import/no-dynamic-require": "error",
      "import/no-named-default": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/no-self-import": "error",
      "import/no-cycle": "error",
      "import/no-useless-path-segments": "error",
      "import/newline-after-import": "error",
      "import/no-amd": "error",
      "import/no-duplicates": ["error", { "prefer-inline": true }],
      "import/no-empty-named-blocks": "error",
      "import/no-extraneous-dependencies": ["error", { includeTypes: true }],
      "import/no-mutable-exports": "error",
      "import/no-named-as-default": "error",
      "import/no-unresolved": [
        "error",
        { commonjs: true, caseSensitive: true },
      ],
      "import/no-import-module-exports": ["error", { exceptions: [] }],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "never",
          warnOnUnassignedImports: true,
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "import/no-unassigned-import": [
        "error",
        {
          allow: [
            "@babel/polyfill",
            "**/register",
            "**/register.*",
            "**/register/**",
            "**/register/**.*",
            "**/*.css",
            "**/*.scss",
            "**/*.sass",
            "**/*.less",
          ],
        },
      ],

      // We would normally like to turn these on, but we remove them for performance reasons
      // https://typescript-eslint.io/troubleshooting/typed-linting/performance
      // "import/default": "error",
      // "import/named": "error",
      // "import/namespace": ["error", { allowComputed: true }],
      // "import/no-named-as-default-member": "error",

      // Suss
      "import/no-relative-packages": "error",
    },
  },
];
