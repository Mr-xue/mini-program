# 小程序项目基础架构搭建

## 工程化配置

#### 1.项目中使用官方WeUI框架作为视图层应用框架，统一采用 `useExtendedLib` 方式引入 

注意：通过此方式引入WeUI，在页面json中引入框架组件时的路径应写为, `weui-miniprogram/xxx/xxx`

[查看文档](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/quickstart.html)


#### 2.接口的统一处理

封装文件在utils目录下的http.js中，可根据实际返回的数据结构对其进行修改。
每个需要调用接口的页面或组件都需要引入

> 使用方式参考目录下的test页面


#### 3.数据集中管理方案

采用小程序官方原生框架 **`OMIX2.0`** 进行处理

使用该方案，需要通过OMIX的脚手架进行项目的创建，同时注意页面和自定义组件的创建方式
> 不需要注入 store 的页面或组件用使用Page和Component 构造器, Component 通过 triggerEvent 与上层通讯或与上层的 store 交互

[查看文档](https://github.com/Tencent/omi/tree/master/packages/omix)


#### 4.小程序分包处理

- 整个小程序所有分包大小不超过 **16M**
- 单个分包/主包大小不能超过 **2M**
- tabBar 页面必须在 app（主包）内

所以在开发过程中，需要进行分包处理，把首要加载项放到主包，其余页面或组件进行分包处理，类似vue路由的懒加载

[查看分包处理文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)




## Tip

#### 1.computed中无法访问this,可通过scope访问data对象

    computed: {
    	reverseMotto(scope) {
    	  console.log('===',scope.data)
    	  console.log('-->',this.name)
    	  return this.motto.split('').reverse().join('')
    	}
    },

#### 2.自定义组件样式注意

![NJFYF0.png](https://s1.ax1x.com/2020/06/22/NJFYF0.png)

#### 3.open-data可在不需要用户授权的情况下直接展示用户信息

[查看文档](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)

#### 4.授权注意事项

1. `wx.authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 `<button open-type="getUserInfo"/>`

2. 需要授权 `scope.userLocation、scope.userLocationBackground` 时必须配置地理位置用途说明。

[授权文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)

#### 5.tabBar图标设置注意事项：icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。

[自定义tabBar文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

#### 6.页面接收数据，类似于路由传参

1.通过Page构造器构造的页面组件可以在onLoad(option)的周期函数中,通过参数option获取

2.通过Component构造器构造的页面组件，可通过提前在组件的properties中编写对好要接收的参数进行获取


## 要点文档
> [页面生命周期](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html)

> [
> 组件使用方法](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

> [组件的生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)

> [Component 构造器说明](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)

> [数据监听器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html)

> [组件间通信与事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)

> [动画的处理](https://developers.weixin.qq.com/miniprogram/dev/framework/view/animation.html)
> 
> [weUI组件库调用方法](https://github.com/wechat-miniprogram/weui-miniprogram/tree/master/tools/demo/example)
