/*
 * @Description: 缓存工具类
 * @Author: kivet
 * @Date: 2021-05-13 19:03:01
 * @LastEditTime: 2021-05-14 09:47:32
 */
import Taro from '@tarojs/taro';

/**
 * @description: 将数据存储在本地缓存中指定的 key 中。
 * 会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。
 * 单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
 * @param {string} key 本地缓存中指定的 key
 * @param {any} data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 * @return {*} 返回一个promise对象
 */
const setItem = async (key: string, data: any): Promise<any> => {
  try {
    return await Taro.setStorage({ key, data });
  } catch (error) {
    // continue regardless of error
  }
};

/**
 * @description: 从本地缓存中异步获取指定 key 的内容
 * @param {string} key 本地缓存中指定的 key
 * @return {*} 返回一个promise对象
 */
const getItem = async (key: string): Promise<any> => {
  try {
    return await Taro.getStorage({ key });
  } catch (error) {
    // continue regardless of error
  }
};

/**
 * @description: 异步获取当前storage的相关信息
 * @return {*} 返回一个promise对象
 */
const getItemInfo = async (): Promise<any> => {
  try {
    return await Taro.getStorageInfo();
  } catch (error) {
    // continue regardless of error
  }
};

/**
 * @description: 从本地缓存中移除指定 key
 * @param {string} key 本地缓存中指定的 key
 * @return {*} 返回一个promise对象
 */
const removeItem = async (key: string): Promise<any> => {
  try {
    return await Taro.removeStorage({ key });
  } catch (error) {
    // continue regardless of error
  }
};

/**
 * @description: 清理本地数据缓存
 * @return {*} 返回一个promise对象
 */
const clearItem = async (): Promise<any> => {
  try {
    return await Taro.clearStorage();
  } catch (error) {
    // continue regardless of error
  }
};

/**
 * @description: Taro.setStorage 的同步版本
 * @param {string} key 本地缓存中指定的 key
 * @param {any} data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
 * @return {*}
 */
const setItemSync = (key: string, data: any): void => {
  Taro.setStorageSync(key, data);
};

/**
 * @description: Taro.getStorage 的同步版本
 * @param {string} key 本地缓存中指定的 key
 * @return {*} 获取的对应key的数据
 */
const getItemSync = (key: string): any => Taro.getStorageSync(key);

/**
 * @description: Taro.getStorageInfo 的同步版本
 * @return {*} 获取的对应key的数据
 */
const getItemInfoSync = (): any => Taro.getStorageInfoSync();

/**
 * @description: 从本地缓存中同步移除指定 key。 Taro.removeStorage 的同步版本
 * @param {string} key 本地缓存中指定的 key
 * @return {*}
 */
const removeItemSync = (key: string): void => {
  Taro.removeStorageSync(key);
};

/**
 * @description: Taro.clearStorage 的同步版本
 * @return {*}
 */
const clearItemSync = () => {
  Taro.clearStorageSync();
};

export {
  setItem,
  getItem,
  getItemInfo,
  removeItem,
  clearItem,
  setItemSync,
  getItemSync,
  getItemInfoSync,
  removeItemSync,
  clearItemSync,
};
