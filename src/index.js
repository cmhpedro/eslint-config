import js from '@eslint/js'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // Prettier config to disable conflicting rules
  prettierConfig,

  // Main configuration
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module',
        ecmaVersion: 'latest',
      }
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      'prettier': prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // TypeScript recommended rules
      ...tsEslint.configs.recommended.rules,

      // Prettier rules
      'prettier/prettier': ['error', {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        quoteProps: 'consistent',
        trailingComma: 'all',
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'avoid',
        endOfLine: 'lf',
      },
    ],

      // Import sorting rules
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]
