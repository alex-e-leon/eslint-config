import xoTypeScript from 'eslint-config-xo-typescript';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  ...xoTypeScript,
  {
    name: 'alex-eslint-typescript',
    files: ['**/*.{ts,tsx}'],
    extends: [importPlugin.flatConfigs.typescript],
  })

