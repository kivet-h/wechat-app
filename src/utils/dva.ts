/*
 * @Description: dva 配置
 * @Author: kivet
 * @Date: 2021-05-08 14:34:04
 * @LastEditTime: 2021-05-08 14:50:33
 */

import { createLogger } from "redux-logger";
import { create } from "dva-core";
import createLoading from "dva-loading";

let app;
let store;
let dispatch;
let registered;

function createApp(options?: any) {
  const { models } = options;

  // 开发环境打印redux日志
  if (process.env.NODE_ENV === "development") {
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
