import importPlugin from "eslint-plugin-import";
import { typeScriptExtensions } from "./util.js";

export default [
  {
    name: "alex-eslint-typescript",
    files: [`**/*.{${typeScriptExtensions.join(",")}}`],
    extends: [importPlugin.flatConfigs.typescript],
  },
];
