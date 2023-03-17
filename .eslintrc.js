module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': ['off'],
    'no-return-await': [0],
    'no-restricted-syntax': ['error', 'ForInStatement'],
  },
};
