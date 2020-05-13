// 程序入口

import Vue from 'vue'
import App from './App'
import router from './router'

// 使得全局样式生效
import "./assets/css/global.css"
//  引入第三方字体
import './assets/fonts/iconfont.css'
// 引入测试主页样式
import "./assets/css/Container.scss"

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 配置请求
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:9302/excel/'
Vue.prototype.$http = axios



Vue.config.productionTip = false
Vue.use(ElementUI)



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
