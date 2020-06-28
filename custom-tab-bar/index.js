
Component({
  data: {
    show:true,
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/main/main",
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component_HL.png",
        "text": "主页"
      },
      {
        "pagePath": "/pages/index-with-data/index",
        "iconPath": "/image/icon_component.png",
        "selectedIconPath": "/image/icon_component_HL.png",
        "text": "首页二"
      },
      {
        "pagePath": "/pages/logs/logs",
        "iconPath": "/image/icon_API.png",
        "selectedIconPath": "/image/icon_API_HL.png",
        "text": "日志"
      }
    ]
  },
  attached() {
    // 动态添加tabBar
   /*  let list = this.data.list;
    list.push({
     "pagePath": "/pages/logs/logs",
      iconPath: "../image/icon_API.png",
      selectedIconPath: "../image/icon_API_HL.png",
      text: "测试"
    })
    this.setData({list}) */
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
     /*  this.setData({
        selected: data.index
      }) */
    }
  }
})