# 小程序项目基础架构搭建

## 工程化配置

#### 1.项目中使用官方WeUI框架作为视图层应用框架，统一采用 `useExtendedLib` 方式引入，通过此形式引入，编译时不计入构建包的大小

注意：通过此方式引入WeUI，在页面json中引入框架组件时的路径应写为, `weui-miniprogram/xxx/xxx`

[查看文档](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/quickstart.html)


#### 2.接口的统一处理

封装文件在utils目录下的http.js中，可根据实际返回的数据结构对其进行修改。
每个需要调用接口的页面或组件都需要引入

> 使用方式参考目录**subPackages/package-1下的test页面**


#### 3.数据集中管理方案

采用小程序官方原生框架 **`OMIX2.0`** 进行处理

使用该方案，需要通过OMIX的脚手架进行项目的创建，同时注意页面和自定义组件的创建方式
> 不需要注入 store 的页面或组件应使用默认Page和Component构造器进行创建， Component 通过 triggerEvent 与上层通讯或与上层的 store 交互

[查看文档](https://github.com/Tencent/omi/tree/master/packages/omix)


#### 4.小程序分包处理

- 整个小程序所有分包大小不超过 **16M**
- 单个分包/主包大小不能超过 **2M**
- tabBar 页面必须在 app（主包）内

所以在开发过程中，需要进行分包处理，把首要加载项放到主包，其余页面或组件进行分包处理。默认情况下，只要没有配置到分包目录下的文件，会统一被构建到主包中。

[查看分包处理文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)

#### 5.多套模板方案

1.将所有模板首页通过Component声明为组件，然后在入口页面通过接口判断模板类型，展示对应的首页组件

2.建议单独创建一个文件夹，存放所有模板的首页组件




## Tip

#### 1.通过OMIX创建的页面、组件，computed中要获取当前组件的data，需要使用this.data
    computed: {
    	reverseMotto(scope) {
    	  console.log('===',this.data.name) //当前组件的name
    	  console.log('===',this.name) //omix中存储的name
    	}
    },

#### 2.自定义组件样式注意

![NJFYF0.png](https://s1.ax1x.com/2020/06/22/NJFYF0.png)

2.组件和页面的css默认是隔离的，及页面中的样式无法影响到组件内的样式

- app.wxss 或页面的 wxss 中使用了标签名选择器（或一些其他特殊选择器）来直接指定样式，这些选择器会影响到页面和全部组件。通常情况下这是不推荐的做法。

- 指定特殊的样式隔离选项 styleIsolation
    
		options: {
			styleIsolation: 'isolated'
		}
		//isolated 表示启用样式隔离，
		//apply-shared 表示页面 wxss 样式将影响到自定义组件，
		//shared 表示页面 wxss 样式将影响到自定义组件
    

#### 3.open-data可在不需要用户授权的情况下直接展示用户信息

[查看文档](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)

#### 4.授权注意事项

1. `wx.authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 `<button open-type="getUserInfo"/>`

2. 需要授权 `scope.userLocation、scope.userLocationBackground` 时必须配置地理位置用途说明。

[授权文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)

#### 5.tabBar图标设置注意事项：icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。

[自定义tabBar文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

#### 6.页面传参及接受参数

- 通过页面跳转方法：wx.reLaunch、wx.redirectTo、wx.navigateTo，以 ` url?name=李磊&age=18 ` 的方式进行传参，**wx.switchTab无法通过url进行传参**

- 通过Page构造器构造的页面，可以在onLoad(option)的周期函数中,通过参数option获取

- 通过Component构造器构造的页面，可通过提前在组件的properties中编写对好要接收的参数进行获取

#### 7.自定义tabBar可能遇到的问题 [(参考文章)](https://www.cnblogs.com/youwei716/p/13152455.html)

#### 8.wxml中绑定的事件，无法给方法直接传递参数，而需要通过触发事件元素的dataset获取

> 例如：点击组件，向change方法传递name名称
   
    <component-tag-name bindtap="change('name')" /> // 错误
    <component-tag-name bindtap="onMyEvent" data-name="name"/> //正确

	//获取方法
	change(e) {
	  let name = e.currentTarget.dataset.name;
	},

## 要点文档
> [页面生命周期](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html)

> [组件使用方法](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

> [组件的生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)

> [Component 构造器说明](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)

> [数据监听器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)

> [组件间通信与事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)

> [动画的处理](https://developers.weixin.qq.com/miniprogram/dev/framework/view/animation.html)

