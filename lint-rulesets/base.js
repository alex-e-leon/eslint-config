module.exports = {
  "extends": [
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "import",
    "prettier"
  ],
  "rules": {
    "no-plusplus": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
    "import/export": "off",
    "no-continue": "off",
    "no-restricted-syntax": [
      "error",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries, and iterate over the resulting array."
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand."
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize."
      }
    ],
    "max-classes-per-file": "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
  }
}
