/* eslint-disable import/no-anonymous-default-export */
// A few helpers to include that will warn for issues where code is too complex
export default [
  {
    name: "alex-eslint-refactoring",
    rules: {
      "max-params": ["warning", { max: 4 }],
      "max-depth": "warning",
      "max-nested-callbacks": ["warning", 4],
      "no-warning-comments": "warn",
      complexity: ["warning", 20],
    },
  },
];
