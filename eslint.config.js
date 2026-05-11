import globals from 'globals';
import h21 from 'eslint-config-h21';

export default h21({
  ignores: [
    'public',
    'backup',
    'scripts',
  ],
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2022,
  },
  js: {
    overrides: {
      'no-console': 0,
    },
  },
  ts: true,
  jsx: true,
  style: {
    overrides: {
      '@stylistic/template-curly-spacing': [2, 'never'],
    },
  },
  unicorn: {
    overrides: {
      'unicorn/numeric-separators-style': 0,
    },
  },
  vue: {
    version: 3,
    a11y: false,
  },
});
