/*
 * @Description: 编译配置详情
 * @Document: https://taro-docs.jd.com/taro/docs/config-detail
 * @Author: kivet
 * @Date: 2021-05-11 18:39:59
 * @LastEditTime: 2021-05-31 17:37:25
 */
import { resolve } from 'path';

const config = {
  projectName: 'wechat-app',
  date: '2021-5-11',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  // 用于配置一些全局变量供代码中进行使用
  defineConstants: {
    PAGE_NUM: 10, // 列表分页每页获取条数
    CURRENT_TIME_ZONE: 0 - new Date().getTimezoneOffset(), // 当前时区
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  alias: {
    '@/assets': resolve(__dirname, '..', 'src/assets'),
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/models': resolve(__dirname, '..', 'src/models'),
    '@/pages': resolve(__dirname, '..', 'src/pages'),
    '@/services': resolve(__dirname, '..', 'src/services'),
    '@/utils': resolve(__dirname, '..', 'src/utils'),
    '@/styles': resolve(__dirname, '..', 'src/styles'),
    '@/enum': resolve(__dirname, '..', 'src/enum'),
    '@/hooks': resolve(__dirname, '..', 'src/hooks'),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
