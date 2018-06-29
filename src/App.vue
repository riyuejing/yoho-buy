<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
    import {mapMutations} from "vuex";
    export default {
        name: "app",
        created(){
            this.$store.commit('getStorage')
        }
    }
</script>
<style lang="less" scoped>
  #app {
    max-width: 18.75rem;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
</style>
