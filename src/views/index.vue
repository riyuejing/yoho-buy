<template>
    <div class="outest-container">
        <div class="top">
            <img src="../components/common/logo.jpg" alt="包包杂货店" class="logopng">
            <a href="/search">
                <i class="iconfont icon-sousuo"></i>
            </a>
        </div>
        <!--轮播图-->
        <lunbo></lunbo>

        <!--一楼(新品到着等)-->
        <one-floor></one-floor>

        <!--二楼(热门分类)-->
        <div>
            <div class="floorTitle">
                <h2>热门分类</h2>
            </div>

            <two-floor></two-floor>
        </div>

        <!--三楼(热门品牌)-->
        <div>
            <div class="floorTitle">
                <h2>热门品牌</h2>
            </div>

            <third-floor></third-floor>
        </div>
        <div>
            <div class="floorTitle" style="position: relative">
                <h2 style="display: inline-block">人气单品排行</h2>
                <router-link to="/list">
                <i style="position: absolute;right: 1rem" class="iconfont icon-fenleiweixuanzhong"></i>
                </router-link>
            </div>
            <popular-item></popular-item>
        </div>
        <!-- list -->
        <ul class="top-btn">
            <li @click="one">新品到着</li>
            <li @click="two">人气单品</li>
        </ul>
        <div class="list-wrap">
            <ul class="list-con">
                <li v-for="item in data" :class="getClass(item.goodsId)">
                    <img :src="(item.goodsImgs)[0]" :alt="item.goodsName">
                    <div class="desdetail">
                        <p class="prosname">{{item.goodsName}}</p>
                        <p class="aboutprice">
                            <span class="cuprice" :class="{'cuprice2':item.goodsPrice.oldprice}">{{item.goodsPrice.currentPrice | price}}</span>
                            <span v-if="item.goodsPrice.oldprice" class="oldprice">{{item.goodsPrice.oldprice | price}}</span>
                            <span class="formore" @click="showSimilar(item)">
                                <i class="iconfont icon-htmal5icon26"></i>
                            </span>
                        </p>
                    </div>
                    <div class="cover" v-show="item.isSimilar">
                        <div class="similar">找相似</div>
                    </div>
                    <div class="newpro" v-if="item.isNewsale">NEW</div>
                    <div class="saleout" v-if="item.isPresale">即将售罄</div>
                </li>
            </ul>
        </div>
        <footer-two></footer-two>
        <footer-home></footer-home>
    </div>
</template>

<script>
    import Lunbo from "../components/common/lunbo";
    import OneFloor from "./OneFloor"
    import TwoFloor from "./twoFloor"
    import ThirdFloor from "./thirdFloor"
    import PopularItem from "./popularItem" //人气单品
    import FooterTwo from '../components/common/footerTwo' //商品详情/列表底部
    import FooterHome from '../components/common/footerHome' //首页底部
    export default {
        name: "index",
        components:{
            Lunbo,
            OneFloor,
            TwoFloor,
            ThirdFloor,
            PopularItem,
            FooterTwo,
            FooterHome,
        },
        data(){
            return {
                data:{}
            }
        },
        created(){
            this.$http.get('/api/goods/new-goods').then(({data})=>{
                this.data = data;
            });
        },
        mounted(){
            $('.top-btn li').click(function(){
                $(this).css("color","#000").siblings().css("color","#999");
            });
        },
        methods:{
            getClass(_id){
                return "id"+_id;
            },
            showSimilar(item){
                if(item.isSimilar == undefined){
                    this.$set(item,"isSimilar",true);
                }else{
                    item.isSimilar = !item.isSimilar;
                }
            },
            one(){
                this.$http.get('/api/goods/new-goods').then(({data})=>{
                this.data = data;
            });
            },
            two(){
                this.$http.get('/api/goods/top-sale').then(({data})=>{
                this.data = data;
            });
            }
        },
        filters:{
            price(price){
                return "¥"+price;
            }
        }
    }
</script>

<style lang="less" scoped>
@import './search/iconfont.css';
@import '../components/common/list/list.less';
/*去除a链接点击时出现蓝色的背景*/
a {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-select: none;
    outline: none;
}
.list-wrap{
    position: relative;
    top:0;
    left:0;
}
.top-btn{
    border-top:1px solid #CBCCCB;
    margin-top:0.7rem;
    width:100%;
    height: 2.5rem;
    line-height:2.5rem;
    padding: 5px 0;
    box-sizing: border-box;
    li:first-child{
        border-right:1px solid #CBCCCB;
        color:#000;
    }
}
    *{
        margin:0;
        padding:0;
    }
    a {
        outline: none;
    }
    .outest-container {
        width: 100%;
        margin-bottom: 2.1rem;
    }
    .top{
        width: 100%;
        text-align:center;
        height: 2.5458rem;
        line-height: 2.5458rem;
        background-color:#4f4138;
        background-image: linear-gradient(#323232,#414141);
        color:#fff;
        .logopng{
            float:left;
            width: 1rem;
            height:100%;
        }
        a{
            position:absolute;
            right:0;
            top:0;
           .icon-sousuo{
               display: inline-block;
               color:#fff;
                width: 2.6rem;
                font-size:18px;
                font-weight: 700;
           }

        }
    }
    .floorTitle {
        position: relative;
        height: 2.3rem;
        line-height: 2.3rem;
        background: #f0f0f0;
        text-align: center;
        h2 {
            color: #000000;
            font-size: 0.7rem;
        }
    }
</style>