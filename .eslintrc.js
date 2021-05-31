/*
 * @Description: eslint 配置
 * @Author: kivet
 * @Date: 2021-05-11 16:29:48
 * @LastEditTime: 2021-05-14 16:53:12
 */

// eslint-disable-next-line import/no-commonjs
module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'taro/react'],
  globals: {
    API_BASE: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 在这里禁用或修改一些不必要的 Airbnb 规则
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'class-methods-use-this': 0,
    'react/jsx-filename-extension': 0,
    'global-require': 0,
    'func-names': ['error', 'never'],
    'consistent-return': 0, // 允许函数具有不同的返回行为，函数中使用 if 语句返回不同值
    camelcase: 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'jsx-quotes': ['error', 'prefer-double'], // jsx 语法中使用双引号
  },
};
