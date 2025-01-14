import xoSpace from 'eslint-config-xo/space';

export default [
  ...xoSpace,
  {
    name: 'alex-eslint-node',
    rules: {
      "no-console": "off",
    }
  }]
