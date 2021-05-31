declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare module 'react-redux';
declare module 'redux-logger';
declare module 'dva-core';
declare module 'dva-loading';
declare module 'dva-immer';

/** API基础地址 */
declare const API_BASE: string;

/** 列表每页条数 */
declare const PAGE_NUM: number;
/** 当前时区 */
declare const CURRENT_TIME_ZONE: number;

/** 任意对象类型 */
type AnyObject = Record<string, any>;

/** 接口返回数据类型 */
type IResObject = {
  cookies: [];
  data: any;
  errMsg: string;
  header: AnyObject;
  statusCode: number;
};

/** 经纬度 */
type ILngAndLat = {
  // 经度
  longitude?: number;
  // 纬度
  latitude?: number;
};

/** Map 组件 markers 属性绑定类型 */
type IMapMarkers = {
  id?: number; //	标记点id	marker 点击事件回调会返回此id。建议为每个 marker 设置上 Number 类型 id，保证更新 marker 时有更好的性能。
  latitude: number; // 纬度	浮点数，范围 -90 ~ 90
  longitude: number; // 经度	浮点数，范围 -180 ~ 180
  title?: string; //	标注点名	点击时显示，callout 存在时将被忽略
  zIndex?: number; //	显示层级
  iconPath: string; // 显示的图标	项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片
  rotate?: number; //	旋转角度	顺时针旋转的角度，范围 0 ~ 360，默认为 0
  alpha?: number; //	标注的透明度	默认1，无透明，范围 0 ~ 1
  width?: string | number; //	标注图标宽度	默认为图片实际宽度
  height?: string | number; //	标注图标高度	默认为图片实际高度
  callout?: any; //	自定义标记点上方的气泡窗口	支持的属性见下表，可识别换行符。
  label?: any; //	为标记点旁边增加标签	支持的属性见下表，可识别换行符。
  anchor?: { x: number; y: number }; //	经纬度在标注图标的锚点，默认底边中点	{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点
  ariaLabel?: string; //	无障碍访问，（属性）元素的额外描述
};

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
  }
}
