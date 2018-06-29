import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入css文件及js文件
import '../public/css/reset.css'
import '../public/font/iconfont.css'
import './assets/js/rem.js'

//导入swiper(轮播插件)
require ('./assets/swiper/swiper-3.4.2.min.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
import $ from 'jquery'
Vue.prototype.$http = axios;
Vue.prototype.$api = "/api";
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')
