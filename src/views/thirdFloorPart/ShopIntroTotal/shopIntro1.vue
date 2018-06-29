<template>
    <!--TOIS朵茜店铺简介(父组件)-->
    <shop-intro-public v-bind:src="src"></shop-intro-public>
</template>

<script>
    import ShopIntroP from './ShopIntroPublic';
    export default {
        name: "shop-intro1",
        data(){
            return {
                src:"http://img11.static.yhbimg.com/yhb-img01/2017/11/06/13/014596c5488e7ce047f839dd55bc397398.jpg?imageMogr2/thumbnail/640x480/extent/640x480/background/d2hpdGU=/position/center/quality/80"
            }

        },
        components:{
            "ShopIntroPublic":ShopIntroP
        }

    }
</script>

<style lang="less" scoped>

</style>