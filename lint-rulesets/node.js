/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";

export default [
  {
    name: "alex-eslint-node",
    languageOptions: {
      globals: { ...globals.nodeBuiltin, ...globals.es2023 },
    },
    rules: {
      "global-require": "error",
      "no-console": ["error", { allow: ["warn", "error", "info", "dir"] }],
      "no-new-require": "error",
      "no-path-concat": "error",
    },
  },
];
