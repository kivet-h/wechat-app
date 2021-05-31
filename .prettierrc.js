/*
 * @Description: prettier 规则配置
 * @Author: kivet
 * @Date: 2021-05-11 17:59:17
 * @LastEditTime: 2021-05-11 18:19:34
 */

module.exports = {
  // 在这里添加，禁用，修改一些规则
  jsxSingleQuote: false, // jsx 语法中使用双引号
  singleQuote: true, // 使用单引号
  tabWidth: 2, // 缩进字节数
  semi: true, // 句末添加分号
  jsxBracketSameLine: false, // 在jsx中把'>'结束符号 是否单独放一行，false-单独一行
  printWidth: 100, // 超过最大值换行
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
};
