<template>
    <div>
        <title-top></title-top>
        <div class="searchbar">
            <div class="inputwrap">
                <i class="iconfont icon-suosou"></i>
                <input type="text" placeholder="搜索商品">
                <span class="s-text">搜索</span>
            </div>

        </div>
    </div>
</template>

<script>
    import TitleTop from '../components/common/titleTop'
    export default {
        name: "search",
        components:{
            TitleTop
        }
    }
</script>

<style lang="less" scoped>
    @import "./cate/iconfont.css";
    .searchbar{
        margin-top: 3.28125rem;
        overflow: hidden;
        width: 100%;
        height: 3.14875rem;
        background-color: #f8f8f8;
    .inputwrap{
        position: relative;
        line-height: 2.1963125rem;
        overflow: hidden;
        width: 21.972625rem;
        height: 2.1963125rem;
        margin:0.4760625rem auto;
        color:#999;
    i{
        text-align: center;
        position: absolute;
        top:0;
        left: 0;
        font-size: 20px;
        width: 2.417rem;
    }
    input{
        outline: none;
        border: 0;
        color: #999;
        box-sizing: border-box;
        font-size: 12px;
        height: 100%;
        width: 17.4375rem;
        padding-left: 2rem;
        border-radius: 1.5rem;
    }
        .s-text{
            text-align: left;
            /*border: 1px solid red;*/
            color: #666;
            font-size: 15px;
            float:right;
            width: 4rem;
        }
    }

    }

</style>