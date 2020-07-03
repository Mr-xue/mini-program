import create from "../../utils/create";
import store from "../../store/index";

create.Component(store, {
	use: ['activeTab'],
	/**
	 * 组件的属性列表
	 */
	properties: {},

	/**
	 * 组件的初始数据
	 */
	data: {
		show: '',
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
	/* 	change(e) {
			let d = e.currentTarget.dataset;
			this.setData({
				show: this.data.show == d.type ? "" : d.type,
			});
		}, */
		// 导航
		tabClick(e) {
			let tab = e.currentTarget.dataset.tab;
			this.store.data.activeTab = tab;
		},
	},
});
