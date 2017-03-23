// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import backer from './backer.vue'

import 'common/stylus/index.styl'

Vue.use(ElementUi)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app5',
  template: '<backer/>',
  components: { backer }
})
