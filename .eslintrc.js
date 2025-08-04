/**
 * @typedef {import('eslint').Linter.Config} ESLintConfig
 *
 * @type {ESLintConfig}
 */


 module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
  ],
  rules: {
      'global-require': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-dynamic-require': 'off',
      'import/no-unresolved': 'off',
      // 'prettier/prettier': 'warn',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'object-curly-spacing': 'off',
      'max-len': ['warn', {code: 150}],
      // 'no-unused-vars': [
      //   'error',
      //   {vars: 'all', args: 'after-used', ignoreRestSiblings: false}
      // ]
      'no-unused-vars': 'off',
      'prettier/prettier': [
          'warn',
          {
              endOfLine: 'auto',
              printWidth: 120
          }
      ]
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
  },
  env: {
      node: true,
      jest: true,
      browser: true
  },
  globals: {
      page: true,
      browser: true,
      context: true
  }
}


