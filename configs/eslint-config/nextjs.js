const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

//From: https://github.com/dukeluo/eslint-plugin-check-file/blob/main/lib/constants/naming-convention.js#L9

/**
 * @example hello, helloWorld
 */
const CAMEL_CASE = '+([a-z])*([a-z0-9])*([A-Z]*([a-z0-9]))';

/**
 * @example Hello, HelloWorld
 */
const PASCAL_CASE = '*([A-Z]*([a-z0-9]))';

/**
 * @example hello, hello-world
 */
const KEBAB_CASE = '+([a-z])*([a-z0-9])*(-+([a-z0-9]))';

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'next',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'jsx-a11y', 'check-file'],
  rules: {
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    'import/no-default-export': 2,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'jsx-a11y/no-autofocus': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-floating-promises': 'error',
    'react/jsx-curly-brace-presence': [1, { props: 'never', propElementValues: 'always' }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'mixpanel-browser',
            importNames: ['default'],
            message: "Please `import { mixpanel } from '~/utils/mixpanel'` instead"
          },
          {
            name: 'lodash',
            importNames: ['default'],
            message:
              "Please import only the functions you need to reduce bundle size. E.g. import { range } from 'lodash'"
          }
        ]
      }
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.test.{js,ts,jsx,tsx}': `@(${CAMEL_CASE}|${PASCAL_CASE}).test`,
        '**/*.config.{js,ts}': `@(${CAMEL_CASE}|${PASCAL_CASE}|${KEBAB_CASE}).config`,
        '**/*.d.{js,ts}': `@(${CAMEL_CASE}|${PASCAL_CASE}|${KEBAB_CASE}).d`,
        '**/!(*.test).{jsx,tsx}': `@(${CAMEL_CASE}|${PASCAL_CASE})`,
        '**/!(*.test|*.config|*.d).{js,ts}': 'CAMEL_CASE'
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        '**/': `@(${CAMEL_CASE}|${PASCAL_CASE})`
      }
    ]
  },
  overrides: [
    {
      files: ['*.test.ts{,x}'],
      rules: {
        'no-restricted-imports': 0 // this are purely for bundle size
      }
    },
    {
      files: ['{src/,}pages/**/*.ts{,x}', '{src/,}app/**/*.ts{,x}'],
      rules: {
        'check-file/filename-naming-convention': 0,
        'check-file/folder-naming-convention': 0,
        'import/no-default-export': 0 // next.js pages/ and app/ folder uses default export
      }
    },
    {
      files: ['sentry.*.config.ts'],
      rules: {
        'check-file/filename-naming-convention': 0
      }
    }
  ]
};
