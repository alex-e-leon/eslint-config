# eslint-config

Personalised eslint-configs + prettier config for:

- react projects with flow + css modules
- node.js projects with flow


## Usage

`npm i -D @alex-e-leon/eslint-config`

.eslintrc
```js
{
  "extends": "@alex-e-leon/eslint-config/react",
}
\\ or
{
  "extends": "@alex-e-leon/eslint-config/node",
}
```

package.json
```js
  "prettier": "@alex-e-leon/eslint-config/prettier.json"
```

Note that you must install prettier, eslint + flow seperately.
