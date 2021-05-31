/*
 * @Description: http 请求封装
 * @Author: kivet
 * @Date: 2021-05-12 10:02:56
 * @LastEditTime: 2021-05-21 14:17:10
 */

import Taro from '@tarojs/taro';

type IMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type IOptions = {
  url: string;
  method?: IMethod;
  header?: AnyObject;
  data?: AnyObject;
  loading?: boolean;
  title?: string;
};

// 默认参数
const defaultParams = {};

/**
 * 检查登录是否失效
 * @param {Object} res
 * @return {Object} 返回业务数据
 */
function checkSuccess(res) {
  const { statusCode = 0 } = res;

  // 调接口时状态码返回401，即表示登录失效，跳转至登录页面
  if (statusCode === 401) {
    Taro.removeStorage({ key: 'druid_userInfo' }).then(() => {
      Taro.redirectTo({
        url: '/pages/Login/index',
      });
    });
  }

  Taro.hideLoading();
  return res;
}

/**
 * 请求出错
 * @param error
 */
function throwError(error) {
  console.log('====Error', error);
  Taro.hideNavigationBarLoading();
  Taro.hideLoading();
  if (error.errMsg) {
    Taro.showToast({
      title: '服务器不可用',
      icon: 'none',
      duration: 1500,
    });
    // throw new Error('服务器不可用');
  }

  // throw error;
}

export default function request(options: IOptions) {
  const { url, method = 'GET', header, data, loading = true, title = '加载中' } = options;
  if (loading) {
    Taro.showLoading({
      title,
    });
  }

  const api_base = API_BASE;
  let reqUrl = api_base + url;
  if (url.includes('http')) {
    reqUrl = url;
  }
  console.log(
    `%c===网络请求START===\n
      URL: ${reqUrl}\n
      METHOD: ${method}\n
      PAYLOAD: ${JSON.stringify({ ...defaultParams, ...data })}\n
      ===网络请求END===`,
    'color: #0376FF'
  );

  // Taro.showNavigationBarLoading();

  const token = Taro.getStorageSync('druid_token') || '';

  return Taro.request({
    url: reqUrl,
    data: {
      ...defaultParams,
      ...data,
    },
    header: {
      'Content-Type': 'application/json',
      'x-druid-authentication': token,
      channelSource: 'largeTerminal',
      ...header,
    },
    method: method.toUpperCase() as IMethod,
  })
    .then(checkSuccess)
    .catch(throwError);
}
