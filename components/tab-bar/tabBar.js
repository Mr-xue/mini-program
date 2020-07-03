import create from '../../utils/create'
import store from '../../store/index'

// components/tab-bar/tabBar.js
create.Component(store,{
  use:['activeTab'],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isIPhoneX : false,
    // 主页、作品、套系、关于、我的
    tabs:[
      {
        tab:'index',
        text:'主页',
        iconName:'icon-shouye',
        openType:'',
      },
      {
        tab:'works',
        text:'作品',
        iconName:'icon-xiangmu',
        openType:'',
      },
      {
        tab:'series',
        text:'套系',
        iconName:'icon-shijian',
        openType:'',
      },
      {
        tab:'about',
        text:'关于',
        iconName:'icon-guanyu',
        openType:'',
      },
      {
        tab:'mine',
        text:'我的',
        iconName:'icon-wode',
        openType:'',
      },

    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击底部tab
    tabClick(e) {
      let tab = e.currentTarget.dataset.tab;
      this.store.data.activeTab = tab;     
    },
  }
})
