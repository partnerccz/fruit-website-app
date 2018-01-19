// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import VueWechatTitle from 'vue-wechat-title'

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  error: '',
  loading: require('./assets/images/loading.gif')
})
Vue.use(VueWechatTitle)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueLazyLoad,
  template: '<App/>',
  components: { App }
})
