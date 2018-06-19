<template>
    <ul class="v-footer">
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>
            <router-link to="/personalCenter">我的</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "v-footer"
    }
</script>

<style lang="less" scoped>
.v-footer{
    position: fixed;
    bottom:0;
    left:0;
    display: flex;
    width: 100%;
    li{
      text-align: center;
      flex:1;
    }
}
</style>