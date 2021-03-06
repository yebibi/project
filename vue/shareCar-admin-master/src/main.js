// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import iView from 'iview'
import VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'
require('./global/index')
require('./global/interface')

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(iView)
Vue.config.productionTip = false

// 实例化VueRouter
const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
