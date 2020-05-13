// 程序入口

import Vue from 'vue'
import App from './App'
import router from './router'

// 使得全局样式生效
import "./assets/css/global.css"
//  引入第三方字体
import './assets/fonts/iconfont.css'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:9302/excel/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
