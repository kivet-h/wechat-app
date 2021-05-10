/*
 * @Description: eslint 规则配置
 * @Author: kivet
 * @Date: 2021-05-08 17:53:24
 * @LastEditTime: 2021-05-10 11:24:59
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
  },
};
