module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'google'],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
    // project: ['./tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'max-len': [2, { code: 80, ignorePattern: '^import .*' }],
    'indent': ['warn', 2],
    'object-curly-spacing': ['warn', 'always'],
    'comma-dangle': ['error', 'never'],
    'no-undef': 'off'
  }
};
