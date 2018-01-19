import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '广州指猴互联网科技有限公司'
      }
    }
  ]
})
