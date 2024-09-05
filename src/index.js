module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'simple-import-sort'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': ['error', {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'consistent',
        trailingComma: 'none',
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'avoid',
        endOfLine: 'lf'
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
