/*
 * @Description: model 文件遍历
 * @Author: kivet
 * @Date: 2021-05-08 14:51:45
 * @LastEditTime: 2021-05-11 10:01:20
 */

// 遍历 models 目录下的 model 文件
let dirModels = [];
const dirFiles = require.context('../models', false, /\.ts$/);
dirFiles.keys().forEach((key) => {
  dirModels = dirModels.concat(dirFiles(key).default);
});

// 遍历 pages 目录下所有的 model.ts 文件
let pageModels = [];
const pagefiles = require.context('../pages', true, /model.ts$/);
pagefiles.keys().forEach((key) => {
  pageModels = pageModels.concat(pagefiles(key).default);
});

export default [...dirModels, ...pageModels];
