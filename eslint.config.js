import globals from 'globals';
import h21 from 'eslint-config-h21';

export default h21({
  ignores: [
    'public',
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
  style: true,
  vue: {
    version: 3,
    a11y: false,
  },
});
