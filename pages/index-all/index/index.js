import create from "../../../utils/create";
import store from "../../../store/index";

//获取应用实例
const app = getApp();

create.Component(store, {
	use: ["tpl", "motto", "userInfo", "hasUserInfo", "canIUse", "newProp"],
	computed: {
		reverseMotto() {
			return this.motto.split("").reverse().join("");
		},
	},
	onLoad: function () {
		console.log("信息", wx.getAccountInfoSync());
		console.log("系统信息", wx.getSystemInfoSync());
		console.log("环境", wx.env);

		if (app.globalData.userInfo) {
			this.store.data.userInfo = app.globalData.userInfo;
			this.store.data.hasUserInfo = true;
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = (res) => {
				this.store.data.userInfo = res.userInfo;
				this.store.data.hasUserInfo = true;
			};
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: (res) => {
					app.globalData.userInfo = res.userInfo;
					this.store.data.userInfo = res.userInfo;
					this.store.data.hasUserInfo = true;
				},
			});
		}

		setTimeout(() => {
			this.store.data.logs.push("abc");
			this.store.data.motto = "123456";
		}, 1000);

		setTimeout(() => {
			this.store.data.motto = "abcdefg";
		}, 2000);

		setTimeout(() => {
			this.store.set(this.store.data, "newProp", "newPropVal");
		}, 3000);

		const handler = function (evt) {
			console.log("store变化", evt);
		};
		store.onChange(handler);

		//store.offChange(handler)

		// 切换自定义tabBar
		/*  let tab = this.getTabBar();
    console.log(tab)
    wx.switchTab({
      url: tab.data.list[1].pagePath,
    }) */
	},
	onShow() {
		if (typeof this.getTabBar === "function" && this.getTabBar()) {
			this.getTabBar().setData({
				selected: 0,
			});
		}
	},

	methods: {
		// 跳转测试
		go() {
			wx.navigateTo({
				url: "/subPackages/package-1/pages/test/test?name=www",
			});
		},

		//事件处理函数
		bindViewTap: function () {
			wx.navigateTo({
				url: "../logs/logs",
			});
		},

		getUserInfo: function (e) {
			console.log("用户信息", e);
			this.store.data.userInfo = e.detail.userInfo;
			this.store.data.hasUserInfo = true;
		},
	},
});
