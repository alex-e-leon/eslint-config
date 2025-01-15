import xoTypeScript from "eslint-config-xo-typescript";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import { typeScriptExtensions } from "./util.js";

export default tseslint.config(...xoTypeScript, {
  name: "alex-eslint-typescript",
  files: [`**/*.{${typeScriptExtensions.join(",")}}`],
  extends: [importPlugin.flatConfigs.typescript],
});
