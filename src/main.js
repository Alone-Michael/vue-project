// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from '../lib/mui-master/dist/js/mui.js'
// import '../lib/mui-master/dist/js/mui.js'
import '../lib/mui-master/dist/css/mui.css'
import '../lib/mui-master/examples/hello-mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.prototype.mui = mui
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
