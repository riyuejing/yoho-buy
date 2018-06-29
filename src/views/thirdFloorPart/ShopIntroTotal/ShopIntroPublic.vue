<template>
    <!--店铺简介公共组件(子组件)-->
    <div>
        <title-top title="店铺简介"></title-top>
        <div class="shop-page">
            <a class="banner" href="">
                <img v-bind:src="src" alt="">
            </a>
            <div class="descripition">
                <p>{{msg}}</p>
            </div>
            <p class="sign-icon">100%品牌授权正品</p>
        </div>
    </div>
</template>

<script>
    import TitleTop from "../../../components/common/titleTop"
    export default {
        name: "shop-intro-public",
        components:{
            TitleTop
        },
        props:["src","msg"]
    }
</script>

<style lang="less" scoped>
    .shop-page {
        text-align: center;
        .banner {

            width: auto;
            display: block;
            background-size: 100%;
            overflow: hidden;
            img {
                margin:2.175rem auto;
                width: 10rem;
            }
        }
        .descripition {
            margin: 0 .5rem;
            font-size: .55rem;
            line-height: 1.2rem;
            padding: 1.5rem .5rem 1rem;
            border-top: 1px solid #e6e6e6;
            border-bottom: 1px solid #e6e6e6;
            text-indent: 2rem;
        }
        .sign-icon {
            font-size: 1rem;
            height: 2rem;
            line-height: 2rem;
            text-align: center;
            font-weight: 100;
            margin-top: .5rem;
        }
    }

</style>