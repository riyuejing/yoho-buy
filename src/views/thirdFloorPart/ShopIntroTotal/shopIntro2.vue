<template>
    <!--Chettl店铺商品简介(父组件)-->
    <shop-intro-public v-bind:src="src" v-bind:msg="msg"></shop-intro-public>
</template>

<script>
    import ShopIntroP from './ShopIntroPublic'
    export default {
        name: "shop-intro2",
        data(){
          return{
                 src:"http://img11.static.yhbimg.com/yhb-img01/2017/04/20/16/012e05fe5b373feea6648a486e6a3586e6.jpg?imageMogr2/thumbnail/640x480/extent/640x480/background/d2hpdGU=/position/center/quality/80",
                 msg:"新世纪男性对化妆品的需求有了新的定义，基础护肤已不能满足男性肌肤的多种诉求。从欧美到亚洲，男性深层护理、自然淡妆逐渐浮出水面，这种健康时尚，更是对生活品质追求。Chetti轩谛突破传统男士化妆领域的灵感在法国横空出世，此专业男士品牌的适时出现，正是基于对男性保养的深层理解和独到见解。Chetti轩谛充分考虑男性肌肤的特殊需求，经数年研究开发了一系列专业男性护肤彩妆，始终以优质的品质和尊贵的服务精神，多角度地满足时尚男士肌肤的渴求，树立男士化妆新标准。",
          }
        },
        components:{
            ShopIntroPublic:ShopIntroP
        }
    }
</script>

<style lang="less" scoped>

</style>