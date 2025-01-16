/* eslint-disable unicorn/filename-case */

// A few helpers to include that will warn for issues where code is too complex
export default [
  {
    name: "alex-eslint-refactoring",
    rules: {
      "max-params": ["warning", { max: 4 }],
      "max-depth": "warning",
      "max-nested-callbacks": ["warning", 4],
      complexity: ["warning", 20],
    },
  },
];
