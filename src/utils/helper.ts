/*
 * @Description: 封装一些公共方法
 * @Author: kivet
 * @Date: 2021-05-13 18:53:02
 * @LastEditTime: 2021-05-31 17:26:42
 */

import Taro from '@tarojs/taro';
import dayjs from 'dayjs';

const YMD = 'YYYY-MM-DD';

/** *********************************************************************************************************
 * ************************常用工具类方法
 ************************************************************************************************************ */
/** 封装公共 Toast 轻提示 */
const druidToast = ({
  title,
  icon = 'none',
  duration = 2000,
}: {
  /** 提示文案 */
  title: string;
  icon?: 'none' | 'loading' | 'success';
  duration?: number;
}) => {
  Taro.showToast({
    title,
    icon,
    duration,
  });
};

/** *********************************************************************************************************
 * ************************常用时间相关处理方法
 ************************************************************************************************************ */
/**
 * 获取两个时间之间的天数
 * @param startDate 开始时间
 * @param endDate 结束时间
 * @param {'D' | 'DHMS' | 'DHM'} type 返回数据格式
 * @returns 两个时间之间的天数，小时数，分钟数，秒等，根据传入type控制返回的数据
 * @type-D eg: 3天
 * @type-DHMS eg: 3天5小时6分钟7秒、5小时6分钟7秒(天数为0)、6分钟7秒(天数，小时都为0)、7秒(天数，小时，分钟都为0)
 * @type-DHM eg: 3天5小时6分钟、5小时6分钟(天数为0)、6分钟(天数，小时都为0)
 */
const getDiffDays = (
  startDate: Date | string,
  endDate: Date | string,
  type?: 'D' | 'DHMS' | 'DHM'
) => {
  const diff = dayjs(endDate).valueOf() - dayjs(startDate).valueOf();
  const days = Math.floor(diff / (24 * 3600 * 1000)); // 计算天数

  const leaveD = diff % (24 * 3600 * 1000); // 计算天数后剩余的毫秒数
  const hours = Math.floor(leaveD / (60 * 60 * 1000)); // 计算小时

  const leaveH = leaveD % (3600 * 1000); // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(leaveH / (60 * 1000)); // 计算分钟

  const leaveM = leaveH % (60 * 1000); // 计算分钟数后剩余的毫秒数
  const seconds = Math.round(leaveM / 1000); // 计算秒

  // ? 返回几天几小时几分钟几秒
  if (type === 'DHMS') {
    let result = `${days}天${hours}小时${minutes}分钟${seconds}秒`;
    if (days === 0) result = `${hours}小时${minutes}分钟${seconds}秒`;
    if (days === 0 && hours === 0) result = `${minutes}分钟${seconds}秒`;
    if (days === 0 && hours === 0 && minutes === 0) result = `${seconds}秒`;
    return result;
  }

  // ? 返回几天几小时几分钟
  if (type === 'DHM') {
    let result = `${days}天${hours}小时${minutes}分钟`;
    if (days === 0) result = `${hours}小时${minutes}分钟`;
    if (days === 0 && hours === 0) result = `${minutes}分钟`;
    return result;
  }

  // ? 先暂时兼容这么几种情况，后期如有需要自行再添加

  // ? 默认只返回天数
  return days;
};

/**
 * 获取给定日期(date)，之前(type: prev)或之后(type: next)，指定天数(day)的日期
 * 默认日期格式为YYYY-MM-DD
 * @param date 给定日期基数
 * @param day 指定日期之前或之后计算天数，默认为1
 * @param type 计算之前，还是之后，prev-之前，next-之后，默认为prev
 * @return
 */
const getPrevOrNextDate = (
  date: Date | string,
  type: 'prev' | 'next' = 'prev',
  day: number = 1
) => {
  // ? 返回 {date} 日期 {day} 天之后的日期
  if (type === 'next') return dayjs(date).add(day, 'day').format(YMD);
  // ? 默认返回 {date} 日期 {day} 天之前的日期
  return dayjs(date).subtract(day, 'day').format(YMD);
};

export { druidToast, getDiffDays, getPrevOrNextDate };
