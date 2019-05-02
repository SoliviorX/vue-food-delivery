import axios from 'axios'

// 开发环境下是'/', 生产环境下是'http://zjutshideshan.cn/sell/'
const urlMap = {
  development: '/',
  production: 'http://zjutshideshan.cn/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {errno, data} = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch((e) => {
    })
  }
}
