/* 项目路由 */

import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/page/login/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/" , redirect: "/login"},
    {path: "/login" , component: Login}


  ]
})
