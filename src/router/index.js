import Vue from 'vue'
import Router from 'vue-router'


// 登录页面
import login from '@/page/login'
// 引入管理页面
import manage from '@/page/manage'
// 引入新闻列表页面
import newList from '@/page/newList'
// 引入增加新闻列表页面
import addNew from '@/page/addNew'
// 引入修改新闻列表页面
import modifyNew from '@/page/modifyNew' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [{
        path: '/newList',
        name: 'newList',
        component: newList
      },{
        path: '/addNew',
        name: 'addNew',
        component: addNew
      },{
        path: '/modifyNew',
        name: 'modifyNew',
        component: modifyNew
      }]
    }
  ]
})
