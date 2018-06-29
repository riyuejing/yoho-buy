<template>
    <!--新人专享福利-->
    <div>
        <div class="con">
            <a href="javascript:;">
                <img src="http://img10.static.yhbimg.com/yhb-img01/2018/05/22/15/0135c52f35df7cc8eab0c0bdfac00a914e.jpg?imageslim" alt="">
            </a>
            <a @click="getShow" href="javascript:;">
            <img src="http://img11.static.yhbimg.com/yhb-img01/2018/05/16/09/0151bd302e234ea083b8323f927a846b95.jpg?imageslim" alt="">
            </a>
            <div class="fuli" style="z-index: 333" :class="{'apper':isA,'disappear':!isA}">
                <img src="http://img10.static.yhbimg.com/yhb-img01/2018/03/15/09/0189549e30396dabb9b27eb3f5da9b3818.2.jpg?imageView2/0/interlace/1/format/webp/q/60" alt="">
            </div>
            <a href="javascript:;">
                <img src="http://img11.static.yhbimg.com/yhb-img01/2018/05/16/09/01c841f195679cac60a895b4fafc3c3fc7.jpg?imageslim" alt=""></a>
            <a href="javascript:;">
                <img src="http://img10.static.yhbimg.com/yhb-img01/2018/05/16/09/01fe5576c8f7bed0bc04cb9bad309dd531.jpg?imageslim" alt=""></a>
            <a href="javascript:;">
                <img src="//img10.static.yhbimg.com/yhb-img01/2018/06/28/14/016ce3ac0027828160dfdc29b5efa4f120.jpg?imageslim" alt=""></a>
            <a href="javascript:;">
            <img src="http://img10.static.yhbimg.com/yhb-img01/2018/06/28/14/0135c2ce1adbf139857287b93eca39efd4.jpg?imageslim" alt="">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newpeople",
        data(){
            return {
                isA:false
            }
        },
        methods:{
            getShow(){
                this.isA = !this.isA;
            }
        }
    }
</script>

<style lang="less" scoped>
    a {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    .con {
        font-size: 0;
        width: 100%;
        img {
         width: 100%;
        }
    }
    
    .apper {
        display: block;
    }
    
    .disappear {
        display: none;
    }
</style>