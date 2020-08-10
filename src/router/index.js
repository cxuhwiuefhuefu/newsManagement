import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 引入首页
import admin from '@/components/admin'

import manage from '@/components/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/manage',
      name: manage,
      component: manage
    }
  ]
})
