export default {
  data: {
    tpl  : 2,
    name : '海贼王',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: [],
    activeTab:'index', //tab所处位置
  },
  //无脑全部更新，组件或页面不需要声明 use
  //updateAll: true,
  debug: false
}