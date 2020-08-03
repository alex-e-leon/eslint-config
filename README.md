# eslint-config

Personalised eslint-configs + prettier config for:

- react projects with flow + css modules
- react projects with ts + css modules
- node.js projects with flow
- node.js projects with typescript 


## Usage

`npm i -D @alex-e-leon/eslint-config`

.eslintrc
```js
{ "extends": "@alex-e-leon/eslint-config/react-flow" }
\\ or
{ "extends": "@alex-e-leon/eslint-config/react-ts" }
\\ or
{ "extends": "@alex-e-leon/eslint-config/node-flow" }
\\ or
{ "extends": "@alex-e-leon/eslint-config/node-ts" }
```

package.json
```js
  "prettier": "@alex-e-leon/eslint-config/prettier.json"
```

Note that you must install prettier, eslint + flow seperately.
