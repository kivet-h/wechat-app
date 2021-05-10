export default {
  pages: ['pages/home/index', 'pages/mine/index', 'pages/pasture/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        text: '首页',
        pagePath: 'pages/home/index',
      },
      {
        text: '我的',
        pagePath: 'pages/mine/index',
      },
    ],
  },
};
