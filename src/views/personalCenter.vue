<template>
    <div>
        <title-top></title-top>
        <router-link to="/signIn">登录</router-link>
    </div>
</template>

<script>
    import TitleTop from '../components/common/titleTop'
    export default {
        name: "personalCenter",
        data(){
            return{
                title:"个人中心"
            }
        },
        components:{
            TitleTop
        }
    }
</script>

<style scoped>

</style>