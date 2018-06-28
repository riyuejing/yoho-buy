import Vue from 'vue'
import Router from 'vue-router'
import PersonalCenter from './views/personalCenter/personalCenter'
import Index from './views/index'
import Search from './views/search/search'
import SignIn from './views/signIn'
import List from './components/common/list/list'
import ListToCate from './views/lcate'
import Shop from './views/shop'
import SignUp from './views/signUp/signUp'
import International from './views/international'
import Sms from './views/sms'
import Cate from './views/cate/cate'
import BringStockCenter from './views/OneFloorPart/BringStockCenter'
//待修改
import New from './views/new' //新品到着
import BSC2 from './views/OneFloorPart/BSC2'//领劵中心子页
import Coupons from './views/OneFloorPart/coupons'//查看我优惠券页
import NewPeople from './views/OneFloorPart/newpeople'//新人专享福利
import TOIS from './views/thirdFloorPart/TOIS' //热门品牌中TOIS
import HotBrand from './views/thirdFloorPart/hotBrandShuff' //热门品牌中Cheett
import BNS from './views/thirdFloorPart/BSN' //热门品牌中BNS
import ShopIntro1 from './views/thirdFloorPart/ShopIntroTotal/shopIntro1'//TOIS店铺介绍
import ShopIntro2 from './views/thirdFloorPart/ShopIntroTotal/shopIntro2'//TOIS店铺介绍
import ShopIntro3 from './views/thirdFloorPart/ShopIntroTotal/shopIntro3'//TOIS店铺介绍
//caiyan
import DetailPro from './components/detail_introduction/detail_introduce'
import lifestyleBrands from './components/lifestyle_brands/lifestyle_brands'
import cart from './components/cart/cart'
import Order from './views/order/order'
import Address from './views/address/address'
import Show from './views/show/show'
import orderList from './views/orderList/orderList.vue'

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    //首页路由
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    //个人中心路由
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: PersonalCenter,
      children: [
        {
          path: '/orders',
          name: 'orderList',
          component: orderList,
        }
      ]
    },
    //登录页面
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn,
      children: [
        {
          path: 'international',
          name: 'international',
          component: International
        },
        {
          path: 'sms_signIn',
          name: 'sms',
          component: Sms
        }
      ]
    },
    //注册页面
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    //搜索页面路由
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: "list",
          name: "list",
          component: List
        }]
    },

      //购物车
      {
        path:'/cart',
        name:"cart",
        component:cart
      },
      //商品详情
      {
        path: '/product',
        name: "product",
        component: DetailPro
      },
      //精选潮流品牌
      {
        path: "/lifestyle-brands",
        name: "lifestyle-brands",
        component: lifestyleBrands
      },
      //店铺的页面
      {
        path:'/shop/:sellerName',
        name:"shop",
        component: Shop
      },
      //新品到着页面
      {
        path:'/lifestyle-new',
        name:'new',
        component:New
      },
      //领劵中心 该路由只用来呈现页面方便铺页面，待修改
      {
          path:'/stock',
          name:'BringStockCenter',
          component:BringStockCenter,
          children:[
              {
                  path:'travel',
                  name:'BSC2',
                  component:BSC2
              }
          ]
      },
      //领劵中心中点击查看我的优惠券跳转到:"优惠券"页面
      {
        path:'/coupons',
        name:'coupons',
        component: Coupons,
      },
      //新人专享福利
      {
         path:'/newpeople',
          name:'newpeople',
          component:NewPeople
      },
      //热门品牌TOIS
      {
        path:'/tois',
        name:'TOIS',
        component:TOIS
      },
      //热门品牌Chett
      {
        path:'/hotbrand',
        name:'hotBrandShuff',
        component:HotBrand,
      },
      //热门品牌bnsN
      {
        path:'/bns',
        name:'BNS',
        component:BNS
      },
      //TOIS店铺简介
      {
        path:'/shopintroone',
        name:'shopIntro1',
        component:ShopIntro1,
      },
      //Chett店铺简介
      {
          path:'/shopintrotwo',
          name:'shopIntro2',
          component:ShopIntro2,
      },
      //BSN店铺简介
      {
          path:'/shopintrothir',
          name:'shopIntro3',
          component:ShopIntro3,
      },
      //分类页面
      {
        path: '/cate',
        name:'cate',
        component:Cate
      },
      //各种页面跳到的list页面
      {
        path:'/list',
        component:ListToCate
      },

    //订单页面
    {
      path: '/order',
      component: Order,
    },
    //地址页面
    {
      path: '/address',
      component: Address,
    },
    //展示地址
    {
      path:'/show',
      component:Show
    }
  ]
})
