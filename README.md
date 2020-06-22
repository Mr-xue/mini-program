# 小程序开发说明

### 1.项目中使用官方WeUI框架，统一采用 `useExtendedLib` 方式引入 
[查看文档](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/quickstart.html)


注意：通过此方式引入WeUI，在页面json中引入框架组件时的路径应写为, `weui-miniprogram/xxx/xxx`

----------

### 2.接口的统一处理

----------




### 3.数据集中管理方案

----------

采用小程序官方原生框架 **`OMIX2.0`** 进行处理

使用该方案，需要通过OMIX的脚手架进行项目的创建，同时注意页面和自定义组件的创建方式

[查看文档](https://github.com/Tencent/omi/tree/master/packages/omix)


## 注意事项
1.computed中无法访问this,可通过scope访问data对象

    computed: {
    	reverseMotto(scope) {
    	  console.log('===',scope.data)
    	  console.log('-->',this.name)
    	  return this.motto.split('').reverse().join('')
    	}
    },

## 要点文档
> [自定义组件使用方法](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)

> [Component 构造器说明](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)

> [组件间通信与事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)

> [动画的处理](https://developers.weixin.qq.com/miniprogram/dev/framework/view/animation.html)

