export const typescriptExtensions = ["ts", "tsx", "mts", "mtsx", "cts"];
export const jsExtensions = ["js", "mjs", "cjs", "jsx", "mjsx"];
export const allExtensions = [...jsExtensions, ...typescriptExtensions];

export const allPlusJsonExtensions = [...allExtensions, "json"];
export const jsPlusJsonExtensions = [...jsExtensions, "json"];
