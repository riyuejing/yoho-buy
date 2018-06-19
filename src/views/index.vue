<template>
    <div>
        <div class="top">top
            <router-link to="/search">搜索</router-link>
        </div>
        <div class="lunbo">轮播</div>
        <div>
            <h2 style="height: 2rem">热门分类</h2>
            <ul style="height: 305px"></ul>
        </div>
        <div>
            <h2 style="height: 2rem">bbb</h2>
            <ul style="height: 305px"></ul>
        </div>
        <div>
            <h2 style="height: 2rem">ccc</h2>
            <ul style="height: 305px"></ul>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VFooter from '../components/common/footer'
    export default {
        name: "index",
        components:{
            VFooter
        }
    }
</script>

<style scoped>
    *{
        border:1px solid;
        margin:0;
        padding:0;
    }
    .top{
        width: 100%;
        height: 2.25rem;

    }
    .lunbo{
        width: 100%;
        height:7.8rem;
    }
</style>