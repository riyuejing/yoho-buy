import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from './views/personalCenter'
import Index from './views/index'
import Search from './views/search'
import SignIn from './views/signIn'
Vue.use(Router)

export default new Router({
    mode:"history",
  routes: [
      {
        path:'/',
        redirect:'/index'
      },
      //首页路由
      {
          path:'/index',
          name:'index',
          component:Index
      },
      //个人中心路由
      {
          path:'/personalCenter',
          name:'personalCenter',
          component: PersonalCenter,
          //失败
          // children:[
          //     {
          //         path:"signIn",
          //         name:"signIn",
          //         component:SignIn
          //     }
          // ]
      },
      //登录页面
      {
          path:'/signIn',
          name:'signIn',
          component:SignIn
      },
      //搜索页面路由
      {
          path:'/search',
          name:'search',
          component:Search
      }
  ]
})
