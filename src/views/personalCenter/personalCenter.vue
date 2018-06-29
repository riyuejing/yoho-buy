<template>
    <div class="wrap">
        <title-top title="个人中心">{{username}}</title-top>
        <div class="bgtop">
            <p class="logonaem">LifeStyle</p>
            <div class="login-btn" v-if='!username'>
                <router-link to="/signIn">登录 /</router-link>
                <router-link to="/signUp"> 注册</router-link>
            </div>
            <div class="nickname">
                <img src="./logo.jpg" alt="lifestyle">
                <p>
                    {{username}}
                </p>
            </div>
        </div>
        <div class="order">
            <div class="otitle">
                我的订单
                <router-link tag="span" to="/personalCenter/orders">
                    全部订单
                    <i class="iconfont icon-jiantou"></i>
                </router-link>
            </div>
            <ul class="line">
                <li>
                    <i class="iconfont icon-daifukuan01"></i>
                    <p>待付款</p>
                </li>
                <li>
                    <i class="iconfont icon-icon2"></i>
                    <p>待发货</p>
                </li>
                <li>
                    <i class="iconfont icon-gerenzhongxindingdandaishouhuo"></i>
                    <p>待收货</p>
                </li>
            </ul>
            <ul class="line">
                <li>
                    <p class="num">0</p>
                    <p>商品收藏</p>
                </li>
                <li>
                    <p class="num">0</p>
                    <p>品牌收藏</p>
                </li>
                <li>
                    <p class="num">0</p>
                    <p>浏览记录</p>
                </li>
            </ul>
        </div>
        <div class="quan">
            <div class="con-wrap">
                <i class="iconfont icon-youhuiquan"></i>
                <div class="m_text">
                    优惠券
                    <span class="iconfont icon-jiantou"></span>
                </div>
            </div>
            <div class="con-wrap">
                <i style="font-size: 16px;" class="iconfont icon-y"></i>
                <div class="m_text hasy">
                    有货币
                    <span class="iconfont icon-jiantou"></span>
                </div>
            </div>
        </div>
        <div class="quan">
            <div class="con-wrap">
                <i class="iconfont icon-xiaoxi"></i>
                <div class="m_text">
                    消息
                    <span class="iconfont icon-jiantou"></span>
                </div>
            </div>
            <div class="con-wrap">
                <i class="iconfont icon-fuwuerji"></i>
                <div class="m_text hasy">
                    服务与反馈
                    <span class="iconfont icon-jiantou"></span>
                </div>
            </div>
        </div>
        <div class="chao"></div>
        <div class="forwechat"></div>
    </div>
</template>

<script>
    import TitleTop from '../../components/common/titleTop'
    export default {
        name: "personalCenter",
        components:{
            TitleTop
        },
        data(){
            return{
                username:''
            }
        },
        mounted(){
            this.username = localStorage.username;
            //console.log(this.username);
        }
    }
</script>

<style lang="less" scoped>
    @import './iconfont.css';
    .nickname{
        img{
            float:left;
            width: 2.5rem;
            height: 2.5rem;
        }
        p{
            margin-left:0.5rem;
            float:left;
            height: 2.5rem;
            line-height:2.56rem;

        }
        width:23rem;
        position:absolute;
        top:3rem;
        font-size: 18px;
        left: 1rem;
        color:#fff;
    }
    .wrap{
        background-color: #EFF0EF;
    }
    .bgtop{
        .logonaem{
            color:#fff;
            position: relative;
            bottom: -1.35rem;
            left: 0.3rem;
        }
        box-sizing: border-box;
        width: 100%;
        padding: 1.15rem 0 1.45rem;
        height: 5.1rem;
        background: url("https://cdn.yoho.cn/yohobuywap-node/6.6.15/img/home/index/header-bg.jpg?163fdd2c860") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .login-btn{
            border: .075rem solid #fff;
            width: 7.2rem;
            height: 1.8rem;
            line-height: 1.8rem;
            text-align: center;
            font-size: .7rem;
            margin-left: auto;
            margin-right: auto;
            a{
                color: #fff;
            }
        }
    }
    .order{
        background-color: #fff;
        color: #444;
        .otitle{
            font-size: .8rem;
            padding: 0 0.95rem;
            height: 2rem;
            line-height:2rem;
            .icon-jiantou{
                height: 2rem;
                line-height:2rem;
                float: right;
            }
            span{
                font-size: .7rem;
                float: right;
            }
        }
        .line{
            height:3.625rem;
            width: 100%;
            display: flex;
            border-top:1px solid #e0e0e0;
            li{
                text-align: center;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                i{
                    font-size: 1.25rem;
                }
                p{
                    font-size: .6rem;
                }
                p.num{
                    font-size: .75rem;
                }
            }
        }
    }
    .quan{
        width: 100%;
        box-sizing: border-box;
        margin-top: .5rem;
        background-color: #fff;
        padding-left: 0.75rem;
        .con-wrap{
            width: 100%;
            height: 2.2rem;
            i{
                float: left;
                font-size: 1.125rem;
                width: 1.5rem;
                line-height: 2.2rem;
            }
            .m_text{
                width: 16.5rem;
                height: 2.2rem;
                font-size: .7rem;
                color: #444;
                line-height: 2.2rem;
                float: left;
                border-bottom:1px solid #e0e0e0;
                .icon-jiantou{
                    height: 2.2rem;
                    line-height: 2.2rem;
                    margin-right: .75rem;
                    float: right;
                }
            }
            .hasy{
                border:0;
            }
        }
    }
    .chao,.forwechat{
        margin-top: .5rem;
        width: 100%;
        height: 4.5rem;
        background: url("http://img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60") no-repeat;
        background-size: cover;
    }
    .forwechat{
        height:5.85rem;
        background: url("http://img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>