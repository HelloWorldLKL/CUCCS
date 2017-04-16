// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUi from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import userInfo from 'components/userInfo/userInfo'
import backerTable from 'components/backerTable/backerTable'
import backer from './backer.vue'

import 'common/stylus/index.styl'

Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.prototype.$http = axios
/* eslint-disable no-new */
var router = new VueRouter({
  routes: [
    { path: '/userInfo', component: userInfo },
    { path: '/backerTable', component: backerTable }
  ],
  linkActiveClass: 'active'
})
router.push('/userInfo')
new Vue({
  el: '#app5',
  template: '<backer/>',
  router: router,
  components: { backer }
})
