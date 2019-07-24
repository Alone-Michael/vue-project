import Vue from 'vue'
import Router from 'vue-router03'
import Login from "../components/Login";
import Home from "../components/Home";
import index from './index'
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[...index]
    },
  ],
  // mode:"history"
})
