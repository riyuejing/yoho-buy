<template>
    <div class="wrap">
        <title-top></title-top>
        <div class="bgtop">
            <div class="login-btn">
                <router-link to="/signIn">登录 /</router-link>
                <router-link to="/signUp"> 注册</router-link>
            </div>
        </div>
        <div class="order">
            <div class="otitle">
                我的订单<span>全部订单 <i class="iconfont icon-jiantou"></i></span>
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
                    <p>0</p>
                    <p>商品收藏</p>
                </li>
                <li>
                    <p>0</p>
                    <p>品牌收藏</p>
                </li>
                <li>
                    <p>0</p>
                    <p>浏览记录</p>
                </li>
            </ul>
        </div>
        <div class="quan">
            <div class="con-wrap">
                <i class="iconfont icon-youhuiquan"></i>
                <div>
                    优惠券
                    <span class="iconfont icon-jiantou"></span>
                </div>
            </div>
            <div class="con-wrap">
                <i style="font-size: 16px;" class="iconfont icon-y"></i>
                <div class="hasy">
                    有货币
                    <span class="iconfont icon-jiantou"></span>
                </div>
            </div>
        </div>
        <div class="quan">
            <div class="con-wrap">
                <i class="iconfont icon-youhuiquan"></i>
                <div>
                    消息
                    <span class="iconfont icon-xiaoxi"></span>
                </div>
            </div>
            <div class="con-wrap">
                <i style="font-size: 16px;" class="iconfont icon-fuwuerji"></i>
                <div class="hasy">
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
        }
    }
</script>

<style lang="less" scoped>
    @import './iconfont.css';
    .wrap{
        background-color: #EFF0EF;
    }
    .bgtop{
        margin-top:3.28125rem;
        width: 100%;
        padding: 1.15rem 0 1.45rem;
        height: 5.1rem;
        background: url("https://cdn.yoho.cn/yohobuywap-node/6.6.15/img/home/index/header-bg.jpg?163fdd2c860") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        .login-btn{
            width: 7.2rem;
            height: 1.8rem;
            line-height: 1.8rem;
            text-align: center;
            border: .1rem solid #fff;
            font-size: 14px;
            margin: 1.3rem auto 0;
            a{
                color: #fff;
            }
        }
    }
    .order{
        background-color: #fff;
        margin-top: .8rem;
        color: #444;
        .otitle{
            padding: 0 0.95rem;
            height:2.5rem;
            line-height:2.5rem;
            span{
                font-size:14px;
                float: right;
            }
        }
        .line{
            height:4.53125rem;
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
                    font-size:25px;
                }
                p{
                    font-size: 12px;
                }
            }
        }
    }
    .quan{
        margin-top: .8rem;
        background-color: #fff;
        /*border:1px solid red;*/
        padding-left: 0.9375rem;
        .con-wrap{
            height: 2.8rem;
            i{
                float: left;
                width: 2rem;
                font-size: 23px;
                line-height: 2.7rem;
            }
            div{
                width: 85%;
                height: 2.7rem;
                padding-right: 0.8rem;
                line-height: 2.7rem;
                float: left;
                border-bottom:1px solid #e0e0e0;
                font-size: 14px;
                span{
                    float: right;
                }
            }
            .hasy{
                border:0;
            }
        }
    }
    .chao,.forwechat{
        margin-top: .8rem;
        width: 100%;
        height: 5.626875rem;
        background: url("http://img11.static.yhbimg.com/yhb-img01/2017/12/18/17/015ca6b18d8571b763e583a288646f737c.jpg?imageView2/3/w/640/h/200/q/60") no-repeat;
        background-size: cover;
    }
    .forwechat{
        height:7.324375rem;
        background: url("http://img11.static.yhbimg.com/yhb-img01/2017/11/16/16/0170b0b5b96d1dc3cfd8a23599cc3eb425.jpg?imageView2/3/w/640/h/200/q/60") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }
</style>