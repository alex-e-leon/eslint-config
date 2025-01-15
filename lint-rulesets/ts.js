/* eslint-disable import/no-anonymous-default-export */
import importPlugin from "eslint-plugin-import";
import {
  typescriptExtensions,
  allExtensions,
  allPlusJsonExtensions,
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
    },
    rules: {
      "@stylistic/indent": ["error", 2, { SwitchCase: 1 }],
    },
  },
];
