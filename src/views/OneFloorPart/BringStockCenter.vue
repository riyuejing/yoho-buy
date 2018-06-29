<template>
    <!--领劵中心页面-->
    <div class="led">
        <!--头部-->
        <title-top></title-top>
        <!--头部下的大图-->
        <div class="stockimg">
            <ul class="stock-img">
                <li class="new-slide">
                    <a href="">
                        <router-link to="/stock/travel">
                            <img :src="piture.src" alt="">
                        </router-link>
                    </a>
                </li>
            </ul>
        </div>

        <!--查看我的优惠券/新客专享/新人专享福利图片-->
        <div class="seestock">
            <router-link to="/coupons">
            <img class="p1" src="http://img11.static.yhbimg.com/yhb-img01/2016/05/25/15/01205da87b57469cad656644bbed4cb4f6.jpg?imageView2/2/w/0/h/0/q/60" alt="">
            </router-link>
            <img class="p2" src="http://img10.static.yhbimg.com/yhb-img01/2016/05/25/17/010de958a30dce39a74fc1c7a325c4e167.jpg?imageView2/2/w/0/h/0/q/60" alt="">
            <img src="http://img11.static.yhbimg.com/yhb-img01/2018/03/02/10/01c34132a8e2ed9ec3d994720ee99147a2.jpg?imageView2/2/w/0/h/0/q/60" alt="">
        </div>

        <router-view></router-view>
    </div>

</template>

<script>
    import TitleTop from "../../components/common/titleTop"
    export default {
        name: "bring-stock-center",
        data(){
            return {
                piture: {
                    src: "http://img11.static.yhbimg.com/yhb-img01/2018/04/04/10/012bc76d4b7634c88ca4f322be25809567.jpg?imageView2/2/w/640/h/240/q/60"
                },
            }
        },
        components:{
            TitleTop,
        }
    }
</script>

<style lang="less" scoped>
    .stockimg {
        overflow: hidden;
        height: 7.75758rem;
        width: 100%;
        max-height: 7.75758rem;
        .stock-img {
            overflow: hidden;
            position: relative;
            li {
                width: 100%;
                height: 100%;
                img {
                    display: block;
                    height: 100%;
                    width: 100%;
                    }
                }
            }
    }
    .seestock {
        img {
            width: 100%;
        }
    }

</style>