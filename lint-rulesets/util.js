export const typescriptExtensions = ["ts", "tsx", "mts", "mtsx", "cts"];
export const jsExtensions = ["js", "mjs", "cjs", "jsx", "mjsx"];
export const allExtensions = [...jsExtensions, ...typescriptExtensions];

export const allPlusJsonExtensions = [...allExtensions, "json"];
export const jsPlusJsonExtensions = [...jsExtensions, "json"];

// Pulled from https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js
// and adjusted to use non-strict names
export const getNamingConventionRule = ({ isTsx, isTest }) => {
  return {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: [
          "classProperty",
          "classMethod",
          "typeMethod",
          "accessor",
          "parameterProperty",
        ],
        format: ["camelCase", isTsx && "PascalCase"].filter(Boolean),
      },
      {
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["objectLiteralProperty", "objectLiteralMethod", "variable"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"].filter(Boolean),
        // We allow double underscore because of GraphQL type names and some React names.
        leadingUnderscore: "allowSingleOrDouble",
        trailingUnderscore: "allow",
        // Ignore `{'Retry-After': retryAfter}` type properties.
        filter: { regex: isTest ? "^[A-Za-z0-9-]*$" : "[- ]", match: false },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase", "UPPER_CASE"],
        prefix: ["is", "has", "can", "should", "will", "did"],
      },
      {
        // Interface name should not be prefixed with `I`.
        selector: "interface",
        filter: /^(?!I)[A-Z]/.source,
        format: ["PascalCase"],
      },
      {
        // Type parameter name should either be `T` or a descriptive name.
        selector: "typeParameter",
        filter: /^T$|^[A-Z][A-Za-z]+$/.source,
        format: ["PascalCase"],
      },
      // Allow these in non-camel-case when quoted.
      {
        selector: ["classProperty", "objectLiteralProperty"],
        format: null,
        modifiers: ["requiresQuotes"],
      },
    ],
  };
};
