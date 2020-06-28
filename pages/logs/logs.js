//logs.js
import create from '../../utils/create'
import store from '../../store/index'

const util = require('../../utils/util.js')

create.Page(store, {
  use: ['logs'],
  
  onLoad: function () {
    wx.showShareMenu({
      success(res){
        console.log('转发接口',res)
      }
    })
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },

  onReachBottom() {
    console.log('==>','到底了')
  },

  onPullDownRefresh() {
    console.log('----','下拉刷新')
  }
})
