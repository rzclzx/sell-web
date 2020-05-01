import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        next({
          path: `/index/product/infoList`,
          replace: true
        })
      }
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve),
      children: [
        {
          path: '/index/product/infoList',
          name: 'ProductInfoList',
          component: resolve => require(['@/pages/product/infoList'], resolve)
        },
        {
          path: '/index/order/create',
          name: 'OrderCreate',
          component: resolve => require(['@/pages/order/create'], resolve)
        }
      ]
    }
  ]
})
