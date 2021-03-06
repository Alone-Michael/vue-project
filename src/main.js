// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/login'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  components: { App },
  template: '<App/>'
})
