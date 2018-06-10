import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    // component: Home
    component: resolve => require(['@/pages/home/Home'], resolve)
  }, {
    path: '/city',
    name: 'City',
    // component: City
    component: resolve => require(['@/pages/city/City'], resolve)
  }, {
    path: '/detail/:id', // 记得在动态路由前加上反斜杠
    name: 'Detail',
    // component: Detail
    component: resolve => require(['@/pages/detail/Detail'], resolve)
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
