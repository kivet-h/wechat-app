/*
 * @Description: 封装公共接口处理 Promise
 * @Author: kivet
 * @Date: 2021-05-13 18:26:03
 * @LastEditTime: 2021-05-17 17:19:33
 */

/**
 * @param {AnyObject} res 接口返回数据
 * @return {*} 一个 promise 对象
 */
const resPromise = (res: AnyObject) =>
  new Promise((resolve, reject) => {
    const { statusCode = 0 } = res;
    if (statusCode >= 200 && statusCode < 300) {
      resolve(res);
    } else {
      reject(statusCode);
    }
  });

export default resPromise;
