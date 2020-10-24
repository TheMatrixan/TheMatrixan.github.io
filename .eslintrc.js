const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'unused-imports', 'import'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: '16',
    },
    'import/internal-regex': '.*/',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  env: {
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    extraFileExtensions: ['json'],
  },
  ignorePatterns: ['/*.*'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': ['warn', 2],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-unused-vars-experimental': ['error'],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/ban-types': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, natural: false, minKeys: 2 }],
    'sort-vars': ['warn', { ignoreCase: true }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          ['index', 'sibling'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react-hooks/exhaustive-deps': ['warn', {}],
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 'off',
    'import/export': 0,
    'react/jsx-fragments': 0,
    'react/jsx-handler-names': 0,
    'react/no-unused-prop-types': 0,
    'space-before-function-paren': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'key-spacing': ['error'],
    'max-lines': ['off', 500],
    'newline-before-return': 'warn',
    'no-empty-pattern': ['error'],
    'no-extra-semi': 'error',
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
    'no-undef-init': 'error',
    'no-undefined': 'warn',
    'no-undef': 'off',
    'no-console': 'warn',
    'import/newline-after-import': ['warn', { count: 1 }],
    'space-infix-ops': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    eqeqeq: ['error', 'smart'],
    semi: ['error', 'always'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-before-blocks': ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
  },
};

module.exports = config;
