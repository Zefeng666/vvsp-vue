let Promise = require('bluebird')
let axios = require('axios')
let qs = require('qs')
// import router from '../router/index'
// import store from '../store/store'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://106.75.232.104:8080/admin' // 10.0.8.177:8080
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code !== 200) {
    // store.commit('showErrorMsg', response.data);
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  // router.push('/wechatLogin')

  return Promise.reject(error)
})
const config = {
  request: (opt) => {
    // let opt;
    if (!opt.params) {
      opt.params = {}
    }
    if (!opt.method) {
      opt.method = 'post'
    }
    opt.method = opt.method.toLowerCase()
    opt.params['token'] = localStorage.getItem('token')
    // opt.params['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzg0NDg1NDIsInVzZXJuYW1lIjoib2FrIn0.IrpxU7ahgZK41r21DjXs6OAmvYKzavrLglQ5P_geEzY'
    if (!opt.params.pageSize) {
      // opt.params['pageSize'] = 50;
    }

    let option = {
      url: opt.url,
      method: opt.method,
      data: qs.stringify(opt.params)
    }
    if (opt.method === 'get') {
      option.params = opt.params
    }
    return new Promise((resolve, reject) => {
      axios(option).then((response) => {
        resolve(response.data)
      }).catch((err) => {
        // 响应错误回调
        reject(err.message)
      })
    })
  }
}

export default config
