/*
 * @Description: model 层 global
 * @Author: kivet
 * @Date: 2021-05-11 16:21:22
 * @LastEditTime: 2021-05-31 17:24:05
 */

import type { Reducer } from 'redux';
import { getListById } from '@/services/global';
import resPromise from '@/utils/resPromise';
import { druidToast } from '@/utils/helper';
import { setItemSync } from '@/utils/storage';

export interface IGlobalState {
  data: string;
}

interface IGlobalModel {
  namespace: 'global';
  state: IGlobalState;
  effects: {
    getListById: any;
  };
  reducers: {
    updateState: Reducer<IGlobalState>;
  };
}

const Global: IGlobalModel = {
  namespace: 'global',
  state: {
    data: 'global model mock data',
  },
  effects: {
    *getListById({ payload = {}, callback }, { call }) {
      const res = yield call(getListById, payload);
      resPromise(res)
        .then((resOk: IResObject) => {
          // 接口调成功，做一些事情，比如说在登录成功的时候，可以在这将登录的信息保存至缓存
          callback && callback(resOk.data); // 将接口成功返回的数据返回
        })
        .catch((resErr) => {
          // 如果需要，当接口报错，对应状态码需要做提示，可以在这操作，如果不需要提示，则catch可以不写
          switch (resErr) {
            case 400:
              druidToast({ title: '调接口出错' });
              break;
            default:
              druidToast({ title: `登录错误 ${resErr}` });
              break;
          }
        });
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default Global;
