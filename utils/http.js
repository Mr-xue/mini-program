 //dev、prod用于区分开发环境和线上环境,上线前要改为prod
let env = 'dev',
    baseUrl;

if(env === 'dev') {
  baseUrl = 'http://xxx.com';
}else{
  baseUrl = 'https://xxx.com';
}

const http = ({
  url = '',
  param = {},
  ...other
} = {}) => {

  wx.showLoading({
    title: '请求中，请耐心等待..'
  });

  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
      },
      ...other,
      complete: (res) => {
        wx.hideLoading();
        if (res.statusCode == 200 ) {
          resolve(res.data)
        } else {
          // 错误提示
          wx.showToast({
            title: 'Error：' + res.data.msg,
            icon: 'none',
            duration: 2000
          })
          reject(res)
        }
      }
    })
  })
}

const getUrl = (url) => {
  if (url.indexOf('://') == -1) {
    url = baseUrl + url;
  }
  return url
}

// get方法
const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}

const _post = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'POST'
  })
}

const _put = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'PUT'
  })
}

const _delete = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'PUT'
  })
}
module.exports = {
  baseUrl,
  _get,
  _post,
  _put,
  _delete
}