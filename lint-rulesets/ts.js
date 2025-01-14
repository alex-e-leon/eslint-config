import xoTypeScript from "eslint-config-xo-typescript";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import { typeScriptExtensions } from "./util.js";

export default tseslint.config(...xoTypeScript, {
  name: "alex-eslint-typescript",
  files: [`**/*.{${typeScriptExtensions.join(",")}}`],
  extends: [importPlugin.flatConfigs.typescript],
});
