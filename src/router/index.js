import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'

Vue.use(Router)
const Home = resolve => require(['../components/Home'], resolve)
const Service = resolve => require(['../components/Service'], resolve)
const About = resolve => require(['../components/About'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/service',
      name: 'Service',
      component: Service
    }, {
      path: '/about',
      name: About,
      component: About
    }
  ]
})
