import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home'
import Member from '../components/tabbar/Member'
import ShopCar from '../components/tabbar/ShopCar'
import Search from '../components/tabbar/Search'
import notFound from '../components/NotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/shopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    { path: '*', component: notFound },
  ],
  linkActiveClass: 'mui-active', //覆盖默认的路由高亮的类，叫做router-link-active
  mode: "history"
})
