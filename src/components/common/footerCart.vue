<template>
    <!--购物底部-->
    <div class="cart-bar">
        <a class="cartfoot" href="javascript:;">
            <div class="num-incart">
                <i class="iconfont icon-gouwuche sty"></i>
                <span class="num-tag">1</span>
            </div>
            <div class="tip">购物车</div>
        </a>
        <a class="cartfoot" href="javascript:;">
            <div class="num-incart">
                <i class="iconfont icon-shangpu sty"></i>
            </div>
            <div class="tip">品牌商铺</div>
        </a>
        <span class="cartfoot" href="javascript:;">
            <div class="num-incart" :class="{'class-a':isA,'class-b':!isA}" @click="getShow">
                <i class="iconfont icon-shoucang-copy styli"></i>
            </div>
            <div class="tip" style="color: rgb(204,204,204)">收藏</div>
        </span>
        <a class="addtoCart" href="javascript:;">加入购物车</a>
    </div>
</template>

<script>
    export default {
        name: "footer-cart",
        data(){
            return{
                isA:false
            }
        },
        methods:{
            getShow(){
                this.isA=!this.isA;
            }
        }
    }
</script>

<style lang="less" scoped>
    .class-a {
        color: red;
    }
    .class-b {
        color: rgb(204,204,204);
    }

    .cart-bar {
        position: fixed;
        bottom: 0;
        z-index: 2;
        box-sizing: border-box;
        padding: .5rem .7rem;
        width: 16rem;
        height: 3rem;
        border-top:1px solid #e0e0e0;
        background-color: #fff;
        vertical-align: middle;
        display: flex;
        justify-content: space-between;
        .cartfoot {
            float: left;
            width: 2.5rem;
            text-align: center;
            vertical-align: middle;
            .num-incart {
                position: relative;
                .sty {
                    color:#444;
                }
                .sty, .styli {
                    font-size: 1.2rem;
                    line-height: 1.2rem;
                }
                .num-tag {
                    position: absolute;
                    top:-0.25rem;
                    right: 0.125rem;
                    display: block;
                    width: 0.75rem;
                    height: 0.75rem;
                    border-radius: 50%;
                    background:#eb0313;
                    color: #fff;
                    text-align: center;
                    font-size: 0.5rem;
                    line-height: 0.75rem;
                }
            }


        }
        .tip {
            margin-top: 0.2rem;
            color: #444;
            font-size: .375rem;
        }
        .addtoCart {
            display: inline-block;
            width: 6.5rem;
            height: 2rem;
            background-color: #eb0313;
            color:#fff;
            text-align: center;
            font-size: 0.8rem;
            line-height: 2rem;
        }
    }
</style>