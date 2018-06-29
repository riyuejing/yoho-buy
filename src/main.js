import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入swiper(轮播插件)
require ('./assets/swiper/swiper-3.4.2.min.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//导入小图标的css文件
require('./assets/font/iconfont.css')
require('./assets/font3/iconfont.css')
require('./assets/font4/iconfont.css')

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
