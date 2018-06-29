<template>
    <!--BSN商品简介(父组件)-->
    <shop-intro-public v-bind:src="src" v-bind:msg="msg"></shop-intro-public>
</template>

<script>
    import ShopIntroP from './ShopIntroPublic'
    export default {
        name: "shop-intro3",
        data(){
            return {
                src:"http://img11.static.yhbimg.com/yhb-img01/2017/11/02/10/014c5431cb72bc605a3a8033a89b0568dc.jpg?imageMogr2/thumbnail/640x480/extent/640x480/background/d2hpdGU=/position/center/quality/80",
                msg:"在于事物内部蕴含的时间和洁净，在于体现选择的态度与自由，在于有节制的控制力，而不是为显现财富进行的无趣挥霍。BSN如倾心于她的人一样低调，她崇尚健康而致力于潮流手机配件的研发，她懂的享受追求精致的产品工艺，她自由的追寻着简雅生活品牌之路。"
            }

        },
        components:{
            ShopIntroPublic:ShopIntroP
        }
    }
</script>

<style lang="less" scoped>

</style>