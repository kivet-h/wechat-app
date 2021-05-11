/*
 * @Description: eslint 规则配置
 * @Author: kivet
 * @Date: 2021-05-08 17:53:24
 * @LastEditTime: 2021-05-11 10:13:05
 */

module.exports = {
  extends: ['airbnb', 'taro/react'],
  globals: {
    API_BASE: true,
  },
  rules: {
    // 在这里禁用或修改一些不必要的 Airbnb 规则
    'react/jsx-filename-extension': [0],
    'react/react-in-jsx-scope': [0],
    'no-console': [0],
    'object-curly-newline': [0],
    'react/destructuring-assignment': [0],
    'react/prop-types': [0],
    'class-methods-use-this': [0],
    'no-param-reassign': [0],
    'no-underscore-dangle': [0],
    'arrow-body-style': ['error', 'as-needed'],
    'global-require': [0],
  },
};
