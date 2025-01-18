/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";

// A helper to setup commonjs files properly - this is exported seperately
// as you usually want to include this last to overwrite the commonjs settings
export default [
  {
    files: ['**/*.cjs'],
    name: "alex-eslint-commonjs",
    languageOptions: {
      sourceType: 'commonjs',
      globals: {...globals.node, ...globals.nodeBuiltin, ...globals.es2023},
    },
  },
];
