export default {
  pages: [
    // tabbar - 首页
    'pages/Home/index',
    // tabbar - 个人
    'pages/Mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#16b351',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  permission: {
    'scope.userLocation': {
      desc: '需要授权小程序获取位置信息权限',
    },
  },
  tabBar: {
    color: '#666666',
    selectedColor: '#16B351',
    list: [
      {
        text: '首页',
        pagePath: 'pages/Home/index',
        iconPath: './assets/tabbar/icon_home_nor.png',
        selectedIconPath: './assets/tabbar/icon_home_sel.png',
      },
      {
        text: '个人',
        pagePath: 'pages/Mine/index',
        iconPath: './assets/tabbar/icon_mine_nor.png',
        selectedIconPath: './assets/tabbar/icon_mine_sel.png',
      },
    ],
  },
};
