module.exports = {
  'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  'parser': '@typescript-eslint/parser',
  'plugins': ['@typescript-eslint'],
  'root': true,
  'rules': {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-trailing-spaces': 'error',
    "@typescript-eslint/no-explicit-any": "off"
  }
};