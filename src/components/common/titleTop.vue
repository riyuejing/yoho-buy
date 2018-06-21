<template>
    <div>
        <div class="title-top">
            <span class="iconfont icon-back back" @click="goToLast"></span>
            <h2 :class="v_path">{{title}}</h2>
            <span class="iconfont icon-viewlist iconviewlist" @click="isShow = !isShow"></span>
        </div>
        <div class="viewlist" v-show="isShow">
            <div class="triangle"></div>
            <ul class="l-icon">
                <li class="iconfont icon-weibiaoti1"></li>
                <li class="iconfont icon-leimupinleifenleileibie2"></li>
                <li class="iconfont icon-htmal5icon29"></li>
                <li class="iconfont icon-wodemian"></li>
            </ul>
            <ul class="r-text">
                <li >
                    <router-link to="/index">首页</router-link>
                </li>
                <!--待修正-->
                <li>
                    <router-link to="/cate">分类</router-link>
                </li>
                <!--待修正-->
                <li>
                    <router-link to="/cart">购物车</router-link>
                </li>
                <li>
                    <router-link to="/personalCenter">我的</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "titleTop",
        data(){
          return {
              title:'',
              path:this.$route.path,
              isShow:false
          }
        },
        computed: {
            //根据路由path来填写top的文字
            v_path() {
                if (this.path == '/personalCenter') {
                    this.title = "个人中心";
                }else if(this.path == '/index'){
                    this.title = "index";
                }else if(this.path == '/search'){
                    this.title = "搜索";
                }
            }
        },
        methods:{
            goToLast(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/fonts/iconfont.css';
    .iconfont{
        color: white;
    }
    .title-top{
        position: fixed;
        top:0;
        left:0;
        width:100vw;
        height: 3.28125rem;
        line-height: 3.28125rem;
        background-color:#4f4138;
        background-image: linear-gradient(#323232,#414141);
        color:#fff;

        .back,.iconviewlist{
            position: absolute;
            top: 0;
            display: block;
            width: 2.625rem;
            height: 3.28125rem;
            line-height: 3.28125rem;
            font-size: 28px;
            font-weight: bold;
            text-align: center;
            vertical-align: baseline;
        }
        .iconviewlist{
            right: 0;
        }
        h2{
            font-size: 1.2rem;
            font-weight: 400;
            text-align: center;
        }
    }
    .viewlist{
        position: absolute;
        width: 8rem;
        height: 8.875rem;
        right: .3rem;
        top: 3.8rem;
        z-index: 999;
        padding-top: .425rem;
        background-image: linear-gradient(#434343,#171717);
        border-radius: .25rem;
        .triangle{
            width: 0;
            height: 0;
            border-left:12px solid transparent;
            border-right:12px solid transparent ;
            border-bottom:12px solid #383938;
            position: absolute;
            right:.5rem;
            top: -0.7rem;

        }
        .l-icon,.r-text {
            height: 8.45rem;
            padding: 1px 0;
            float:left;
        }
        .l-icon li{
            width:1.75rem;
            height: 2.1rem;
            line-height: 2.1rem;
            padding-left: 1rem;
            font-size:1.2rem;
        }
        .r-text li{
            text-align: center;
            font-size: .85rem;
            width: 4.25rem;
            height: 2.1rem;
            padding-left: .5rem;
            border-bottom: 1px solid #444;
        }
        .r-text a{
            line-height: 2.1rem;
            color: #fff;
        }
    }


</style>