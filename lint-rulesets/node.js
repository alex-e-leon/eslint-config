import xoSpace from "eslint-config-xo/space";

export default [
  ...xoSpace,
  {
    name: "alex-eslint-node",
    rules: {
      "global-require": "error",
      "no-new-require": "error",
      "no-path-concat": "error",
    },
  },
];
