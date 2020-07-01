import create from '../../utils/create'
import store from '../../store/index'

// pages/main/main.js

/**
 * 全局数据
 */
create.Page(store,{
  use:['userInfo','tpl','activeTab'],

  /**
   * 页面的初始数据
   */
  data: {
    tpl : 666,

    // 模板2用到的数据
    show:'',
    background: ['https://img.picbling.cn/dc2d5c50-74f3-493f-9d87-df78096b1781.jpg-pcPgCoverMiddle', 'https://img.picbling.cn/974b6af0-e112-496e-b199-173718da6a8b.jpg-pcPgCoverMiddle', 'https://img.picbling.cn/f44de42f-b6fd-4006-a1e2-cba886c1d8d0.jpg-pcPgCoverMiddle'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

    console.log('66666',this.selectComponent('.test'))
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 切换模板
  changeTpl(scope) {
    this.store.data.tpl = this.data.$.tpl === 1 ? 2 : 1;
  },

  // 模板2调用方法
  change(e) {
    let d = e.currentTarget.dataset;
    this.setData({
      show: this.data.show == d.type ? '' : d.type
    })
  },
})