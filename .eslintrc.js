module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': [
      'error', {
        ObjectExpression: {
          minProperties: 3,
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 3,
          consistent: true,
          multiline: true,
        },
      },
    ],
    indent: [
      'error',
      2,
    ],
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
  },
};
