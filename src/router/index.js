/* 项目路由 */

import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/page/login/Login";
import Home from "../components/page/home/Home";
import Menu from "../components/page/menu/Menu";
import Container from "../components/page/test/Container.vue";
import Page1 from "../components/page/page1/Page1.vue";
import Page2 from "../components/page/page2/Page2.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/" , redirect: "/login"},
    {path: "/login" , component: Login},
    {path: "/menu" , component: Menu},
    {path: "/container" ,  component: Container , children:[
        {path: "/page1" , name: "页面1", component: Page1},
        {path: "/page2" , name: "页面2", component: Page2},
      ]},
    {path: "/home" , component: Home , children: []}

  ]
})
