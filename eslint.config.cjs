// eslint.config.cjs
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    ignores: ['node_modules/**', 'dist/**'],
    rules: {
      // your custom rules
    },
  },
  prettier,
];
