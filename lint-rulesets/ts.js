/* eslint-disable import/no-anonymous-default-export */
import importPlugin from "eslint-plugin-import";
import { typeScriptExtensions, allExtensions } from "./util.js";

export default [
  {
    name: "alex-eslint-typescript",
    files: [`**/*.{${typeScriptExtensions.join(",")}}`],
    extends: [importPlugin.flatConfigs.typescript],
    settings: {
      "import/extensions": allExtensions.map((ext) => `.${ext}`),
      "import/resolver": { node: true },
    },
  },
];
