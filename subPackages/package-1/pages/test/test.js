//logs.js
import create from "../../../../utils/create";
import store from "../../../../store/index";

const http = require("../../../../utils/http.js");

create.Page(store, {
	use: ["name"],
	/**
	 * 页面的初始数据
	 */
	data: {
		show: false, //显示弹窗
		oneButton: [{ text: "确定" }],
	},

	// 获取测试数据
	getData() {
		http._get("http://rap2.taobao.org:38080/app/mock/237678/getList").then(
			(res) => {
				console.log("promise", res);
			}
		);
	},
	// 返回
	back() {
		wx.navigateBack();
	},

	tapBtn() {
		this.setData({
			show: false,
		});
	},

	openDialog() {
		this.setData({
			show: true,
		});
	},

	onLoad(option) {
		console.log("接收的数据", option);
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onShow: function (options) {
		console.log("===", options);
		this.getData();
	},
});
