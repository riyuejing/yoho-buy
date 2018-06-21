import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from './views/personalCenter/personalCenter'
import Index from './views/index'
import Search from './views/search'
import SignIn from './views/signIn'
import SignUp from './views/signUp/signUp'
import International from './views/international'
import Sms from './views/sms'
import Cate from './views/cate/cate'
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
      },
      //登录页面
      {
          path:'/signIn',
          name:'signIn',
          component:SignIn,
          children:[
              {
                  path:'international',
                  name:'international',
                  component:International
              },
              {
                  path:'sms_signIn',
                  name:'sms',
                  component:Sms
              },

          ]
      },
      //注册页面
      {
          path:'/signUp',
          name:'signUp',
          component:SignUp
      },
      //搜索页面路由
      {
          path:'/search',
          name:'search',
          component:Search
      },
      //分类页面
      {
          path: '/cate',
          name:'cate',
          component:Cate
      }
  ]
})
