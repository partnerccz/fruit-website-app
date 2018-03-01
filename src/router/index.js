import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'

Vue.use(Router)
const Invite = resolve => require(['../components/Invite'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '广州指猴互联网科技有限公司'
      }
    }, {
      path: '/invite',
      name: 'Invite',
      component: Invite
    }
  ]
})
