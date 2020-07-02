// components/index2/index2.js
Component({
	options: {
		styleIsolation: "shared",
	},
	/**
	 * 组件的属性列表
	 */
	properties: {},
	onShareAppMessage() {
		return {
			title: "swiper",
			path: "page/component/pages/swiper/swiper",
		};
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		show: "",
		shoWork: false, //是否展示作品下拉列表
		showTao: false, //是否展示套系下拉列表
		background: [
			"https://img.picbling.cn/dc2d5c50-74f3-493f-9d87-df78096b1781.jpg-pcPgCoverMiddle",
			"https://img.picbling.cn/974b6af0-e112-496e-b199-173718da6a8b.jpg-pcPgCoverMiddle",
			"https://img.picbling.cn/f44de42f-b6fd-4006-a1e2-cba886c1d8d0.jpg-pcPgCoverMiddle",
		],
		indicatorDots: true,
		vertical: false,
		autoplay: true,
		interval: 2000,
		duration: 500,
		showImg: false, //是否显示图片预览模块
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		go() {
			wx.switchTab({
				url: "/pages/logs/logs",
			});
		},
		change(e) {
			let d = e.currentTarget.dataset;
			this.setData({
				show: this.data.show == d.type ? "" : d.type,
			});
		},
		imgChange(e) {
			console.log(e);
		},
		preview() {
			this.setData({
				showImg: true,
			});
		},
		hide() {
      console.log('隐藏事件')
    }
	},
});
