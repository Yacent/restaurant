// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon)

import { imgUploadObj, imgUploadPer, style } from './directive'
Vue.directive('bindimgid', imgUploadObj)
Vue.directive('binduploadper', imgUploadPer)
Vue.directive('bdstyle', style)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
