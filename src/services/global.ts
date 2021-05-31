/*
 * @Description: global service
 * @Author: kivet
 * @Date: 2021-05-12 10:25:40
 * @LastEditTime: 2021-05-31 17:20:21
 */

import Request from '@/utils/request';

/** 获取列表 */
export const getListById = ({ id = '' }) =>
  Request({
    url: `/v1/list/${id}`,
  });
