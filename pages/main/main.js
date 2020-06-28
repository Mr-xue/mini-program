import create from '../../utils/create'
import store from '../../store/index'

// pages/main/main.js

/**
 * 全局数据
 */
create.Page(store,{
  use:['userInfo','tpl'],

  /**
   * 页面的初始数据
   */
  data: {
    tpl : 666
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
    console.log(this.data.tpl, this.data.$.tpl)
    this.store.data.tpl = this.data.$.tpl === 1 ? 2 : 1;
  }
})