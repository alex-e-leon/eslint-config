# eslint-config

Personalised eslint-configs + prettier config for:

- react projects with ts + css modules
- node.js projects with typescript 
- a bonus config that shows suggestions for areas of the code to refactor or simplify

Requires eslint 9 es modules (ie type:module is set in the package json) and uses the new flat file config

## Usage

`npm i -D @alex-e-leon/eslint-config`

.eslint.config.js
```js
import eslintConfig from "@alex-e-leon/eslint-config/react-ts";
\\ or
import eslintConfig from "@alex-e-leon/eslint-config/node-ts";

export default [
...eslintConfig,
// any local overrides
]

```

package.json
```js
  "prettier": "@alex-e-leon/eslint-config/prettier.json"
```

Note that you must install typescript, prettier and eslint seperately
