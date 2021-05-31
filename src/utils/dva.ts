/*
 * @Description: dva 配置
 * @Author: kivet
 * @Date: 2021-05-11 16:06:28
 * @LastEditTime: 2021-05-12 09:55:32
 */

import { createLogger } from 'redux-logger';
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;
let registered;

function createApp(options?: any) {
  const { models } = options;

  // 开发环境打印redux日志
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-param-reassign
    options.onAction = [createLogger()];
  }
  app = create({
    ...options,
  });
  app.use(createLoading({}));

  if (!registered) {
    models.forEach((model) => app.model(model));
  }
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
