/*
 * @Description: model 层 global
 * @Author: kivet
 * @Date: 2021-05-08 14:54:07
 * @LastEditTime: 2021-05-11 10:08:56
 */

import type { Reducer } from 'redux';

export interface IGlobalState {
  data: string;
}

interface IGlobalModel {
  namespace: 'global';
  state: IGlobalState;
  effects: any;
  reducers: {
    updateState: Reducer<IGlobalState>;
  };
}

const Global: IGlobalModel = {
  namespace: 'global',
  state: {
    data: 'global model mock data',
  },
  effects: {},
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
