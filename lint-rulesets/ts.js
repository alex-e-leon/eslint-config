/* eslint-disable import/no-anonymous-default-export */
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import importPlugin from "eslint-plugin-import";
import {
  typescriptExtensions,
  allExtensions,
  allPlusJsonExtensions,
  getNamingConventionRule,
} from "./util.js";

export default [
  {
    name: "alex-eslint-typescript",
    files: [`**/*.{${typescriptExtensions.join(",")}}`],
    extends: [importPlugin.flatConfigs.typescript],
    settings: {
      "import/extensions": allExtensions.map((ext) => `.${ext}`),
      "import/resolver": {
        typescript: { extensions: allExtensions.map((ext) => `.${ext}`) },
        node: { extensions: allPlusJsonExtensions.map((ext) => `.${ext}`) },
      },
      "import/external-module-folders": ["node_modules", "node_modules/@types"],
      "import/parsers": {
        "@typescript-eslint/parser": typescriptExtensions.map(
          (ext) => `.${ext}`,
        ),
      },
      "import/resolver-next": [
        createTypeScriptImportResolver({ alwaysTryTypes: true }),
      ],
    },
    rules: {
      // Import xos typescript space file doesn't actually work, so we need to re-apply the indent rule
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],

      // Not included in xo's typesript rules
      "no-implied-eval": [0],
      "@typescript-eslint/no-implied-eval": [2],
      "no-shadow": [0],
      "@typescript-eslint/no-shadow": [2],
      "no-use-before-define": [0],
      "@typescript-eslint/no-use-before-define": [
        2,
        { functions: true, classes: true, variables: true },
      ],

      // Overwritten from xo
      "@typescript-eslint/default-param-last": "off",
      "@typescript-eslint/no-empty-function": [
        "error",
        { allow: ["private-constructors"] },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        {
          allowDefaultCaseForExhaustiveSwitch: false,
          considerDefaultExhaustiveForUnions: true,
          requireDefaultForNonUnion: true,
        },
      ],
      "@typescript-eslint/no-inferrable-types": [
        "error",
        { ignoreParameters: true, ignoreProperties: true },
      ],
      "@typescript-eslint/no-restricted-types": [
        "error",
        {
          types: {
            object: {
              message:
                "The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848",
              fixWith: "Record<string, unknown>",
            },
            Buffer: {
              message:
                "Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer",
              suggest: ["Uint8Array"],
            },
            "[]": "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
            "[[]]":
              "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
            "[[[]]]": "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
            "[[[[]]]]": "ur drunk 🤡",
            "[[[[[]]]]]": "🦄💥",
          },
        },
      ],
      ...getNamingConventionRule({ isTsx: false, isTest: false }),
    },
  },
  {
    files: ["**/*.{tsx,mtsx}"],
    rules: {
      ...getNamingConventionRule({ isTsx: true, isTest: false }),
    },
  },
  {
    files: [`**/*.{spec,integrationTest,test}.{${allExtensions.join(",")}}`],
    rules: {
      ...getNamingConventionRule({ isTsx: false, isTest: true }),
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
    },
  },
];
