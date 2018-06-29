<template>
    <ul class="footer-tab">
        <li>
            <router-link to="/index">
                <i class="iconfont icon-tubiao01"></i>
                <p class="tab-name active">首页</p>
            </router-link>
        </li>

        <li>
            <router-link to="/cate">
                <i class="iconfont icon-leimupinleifenleileibie1 hfcolor"></i>
                <p class="tab-name">分类</p>
            </router-link>
        </li>
        <li>
            <router-link to="/cart">
                <i class="iconfont icon-gouwuche hfcolor"></i>
                <p class="tab-name">购物车</p>
            </router-link>
        </li>


        <li>
            <router-link to="/personalCenter">
              <i class="iconfont icon-wode-weixuanzhong hfcolor"></i>
              <p class="tab-name">我的</p>
            </router-link>
        </li>


    </ul>
</template>

<script>
    export default {
        name: "footer-home"
    }
</script>

<style lang="less" scoped>
    .footer-tab {
        position: fixed;
        bottom: 0;
        padding-top: 0.5rem;
        width: 100%;
        height: 2.1rem;
        border-top: 0.5px solid rgb(176,176,176);
        background: #fff;
        z-index: 3;
        display: flex;
        li{
            flex:1;
            text-align: center;
            .hfcolor {
                color:rgb(208,208,208);
            }
            i {
                display: inline-block;
                font-size: 1.1rem;
                line-height: 1.1;
            }
            .tab-name {
                display: block;
                margin-top: 0.22rem;
                font-size: 0.6rem;
                line-height: 0.6rem;
                /*transform:scale(0.9);*/
                color: rgb(176, 176, 176);
            }
            .active {
                color: black;
            }
        }


    }

</style>