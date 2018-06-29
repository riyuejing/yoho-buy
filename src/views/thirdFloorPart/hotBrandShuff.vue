<template>
    <div>
        <title-top></title-top>

        <router-link to="/hotbrand"></router-link>
            <!--头部-->
            <div class="branner-top" style="background-image:url(http://img13.static.yhbimg.com/yhb-img02/2017/12/11/15/0236f6d70b06d709d819e3f316cd841f62.jpg?imageMogr2/auto-orient/strip/thumbnail/x234/crop/750x234)">
                <div class="shopcover"></div>
                <img class="logo"  src="http://img11.static.yhbimg.com/yhb-img01/2017/04/20/16/012e05fe5b373feea6648a486e6a3586e6.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/80" alt="">
                <h1 class="store-name">Chettl Rouge轩谛</h1>
                <div class="fav-box">
                    <div class="favs">粉丝数:4.0w</div>
                    <div class="not-collect" :class="{'class-a':isA,'class-b':!isA}" @click="getShow">
                        <i class="iconfont icon-shoucang-copy styli"></i>
                        <span class="shouc1" @click="changeStatus">{{btnStatus?'收藏':'已收藏'}}</span>
                    </div>
                </div>
            </div>

            <!--tab切换部分-->
            <div class="tab">
                <!--nav-->
                <ul class="shop-tabs">
                    <li class="shop-tab-nav" v-for="(item,index) in items" :class="{hue:changeHue == index}" @click="goPage(index)" style="border-right: 1px solid rgb(222,223,229)">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <!--nav内容-->
                <div class="tab-panels">
                    <!--导航一内容-->
                    <div class="home-nav" v-if="first">
                        <!--轮播-->
                        <div class="container2">
                        <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
                            <!-- 这部分放你要渲染的那些内容 -->
                            <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                                <a href="">
                                    <img style="width:100vw;" src="https://img12.static.yhbimg.com/yhb-img02/2017/12/14/16/02eec0f891d5b9ed0431ada962d95416ce.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                                <a href="">
                                    <img style="width:100vw;" src="https://img13.static.yhbimg.com/yhb-img02/2017/12/14/16/0280108393dd562e4a0b41612b37189e50.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </swiper-slide>
                        </swiper>
                        </div>
                        <div class="bt"></div>
                        <div class="itemCon">
                            <div class="item">
                                <a href="javascript:;">
                                    <img class="item-pic" src="http://img12.static.yhbimg.com/yhb-img02/2017/12/11/16/0217660a02fea44782667d0d1d5e35a141.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="javascript:;">
                                    <img class="item-pic" src="http://img13.static.yhbimg.com/yhb-img02/2017/12/11/16/02cf3aee2e64349e2300b8df4512e45fd3.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="bt"></div>
                        <div class="itemCon2">
                            <div class="item">
                                <a href="javascript:;">
                                    <img class="item-pic" src="http://img13.static.yhbimg.com/yhb-img02/2017/12/11/16/020706ddf2392dbeb11308bcc8fead493f.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="javascript:;">
                                    <img class="item-pic" src="http://img13.static.yhbimg.com/yhb-img02/2017/12/12/11/0280efcf048f2a23df1a987fcf837a4a13.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </div>
                            <div class="item">
                                <a href="javascript:;">
                                    <img class="item-pic" src="http://img13.static.yhbimg.com/yhb-img02/2017/12/11/16/02d1b276ddfd551a69e8fa71bb7dc1a5b7.jpg?imageMogr2/quality/80" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="bt"></div>

                        <!--列表-->
                        <div class="list-wrap" ref="lis">
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

                                </li>
                            </ul>
                        </div>

                    </div>
                    <!--导航二内容-->
                    <div class="new-nav" v-else-if="second">

                        <!--列表-->
                        <div class="list-wrap" ref="lis">
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

                                </li>
                            </ul>
                        </div>

                    </div>
                    <!--导航三内容-->
                    <div class="goods-nav" v-else-if="third">
                        <!--全部分类列表(从lcate复制)-->
                        <!--全部分类列表头部-->
                        <ul class="top-btn">
                            <li>默认
                                <i class="iconfont icon-sanjiao_xia"></i>
                            </li>
                            <li>新品</li>
                            <li>人气</li>
                            <li class="tab-price">价格
                                <span class="arrow">
                    <i class="iconfont icon-shangjiantou i-block1"></i>
                    <i class="iconfont icon-xiajiantou i-block"></i>
                </span>
                            </li>
                            <li>筛选
                                <i class="iconfont icon-sanjiao_xia"></i>
                            </li>
                        </ul>
                        <!--全部分类列表内容-->
                        <listmin></listmin>
                    </div>
                </div>
            </div>

        <!--底部-->
        <div class="shop-foot-wrapper">
            <ul>
                <li class="shop_footnav_one">
                    <span id="shop-category" @click="showToggle">商品分类</span>
                    <div class="sub-group" v-show="isShow">
                        <dl>
                            <dd>
                                <a href="javascript:;">美妆/个护</a>
                            </dd>
                        </dl>
                        <div class="sharp"></div>
                    </div>
                    <div class="wall"></div>
                </li>
                <li>
                    <a href="http://localhost:8080/shopintrotwo">店铺简介</a>
                </li>
            </ul>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import Bus from '../../components/common/bus'
    import TitleTop from '../../components/common/titleTop'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import Listmin from '../../components/common/listmin'
    import Lcate from '../../views/lcate'
    export default {
        name: "hot-brand-shuff",
        components:
            {
                TitleTop,
                swiper,
                swiperSlide,
                Listmin,
                Lcate
            },
        data() {
            return {
                data:{},
                myPrimaryClass:'',
                mySecondclass:'',
                isA: false,
                btnStatus: true,
                isShow: false,
                items: [
                    {
                        name: "首页"
                    },
                    {
                        name: "新品"
                    },
                    {
                        name: "全部商品"
                    }
                ],
                first: true,
                second: false,
                third: false,
                changeHue:0,

                //以下为轮播图部分
                swiperOption: {
                    notNextTick: true,
                    autoplay: true,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    loop: true,
                    paginationClickable: true,
                    mousewheelControl: true,
                    observeParents: true,
                    debugger: true,
                }
            }
        },
        methods: {
            getShow() {
                this.isA = !this.isA;
                //转到收藏
                this.$http.get('/api/user/collectShop',{
                    params:{
                        seller:1
                    }
                }).then(({data})=>{

                })
            },
            changeStatus() {
                this.btnStatus = this.btnStatus ? false : true;
            },
            showToggle() {
                this.isShow = !this.isShow;
            },
            goPage(index) {
                console.log(index);
                if (index == 0) {
                    this.first = true;
                    this.second = false;
                    this.third = false;
                    this.changeHue = index;
                } else if (index == 1) {
                    this.first = false;
                    this.second = true;
                    this.third = false;
                    this.changeHue = index;
                } else if (index == 2) {
                    this.first = false;
                    this.second = false;
                    this.third = true;
                    this.changeHue = index;
                }
            },
            getClass(_id){
                return "id"+_id;
            },
            showSimilar(item){
                if(item.isSimilar == undefined){
                    this.$set(item,"isSimilar",true);
                }else{
                    item.isSimilar = !item.isSimilar;
                }
            }
        },
        created(){
            Bus.$on("primaryClass",(data)=>{
                this.myPrimaryClass = data;
            });
            Bus.$on("secondclass",(data)=>{
                this.mySecondclass = data;
            });
            Bus.$on('indexsecondclass',(data)=>{
                this.mySecondclass = data;
            });
            this.$http.get('/api/goods/goods-class',{
                params:{
                    primaryclass:this.myPrimaryClass,
                    secondclass:this.mySecondclass
                }
            }).then(({data})=>{
                this.data = data;
            });
        },
        filters:{
            price(price){
                return "¥"+price;
            }
        }

    }
</script>

<style lang="less" scoped>
    @import "../../components/common/list/list";
    .list-wrap{
        position:relative;
        top:0;
        left:0;
    }
    /*去除a链接点击时出现蓝色的背景*/
    a {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-select: none;
        outline: none;
    }
    .class-a {
        color: red;
    }
    .class-b {
        color: white;
    }
    .hue {
        color: rgb(184,155,178);
        font-weight: 500;
    }
    .branner-top {
        width: 100%;
        height: 5.85rem;
        position: relative;
        overflow: hidden;
        background-size: 100%;
        background-repeat: no-repeat;
        .shopcover {
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,.2);
        }
        .logo {
            position: absolute;
            overflow: hidden;
            left: .75rem;
            bottom: .75rem;
            width: 2.5rem;
            height: 2.5rem;
            display: block;
            margin: 0 auto;
            max-width: 100%;
            border: 0;
        }
        .store-name {
            color: #fff;
            font-size: .7rem;
            position: absolute;
            bottom: .75rem;
            overflow: hidden;
            left: 3.7rem;
        }
        .fav-box {
            right: .75rem;
            border-radius: .25rem;
            text-align: center;
            background-size: contain;
            color: #fff;
            font-size: .7rem;
            position: absolute;
            bottom: .5rem;
            .favs {
                float: left;
                line-height: 1.2rem;
                margin-right: .4rem;
                padding-top: .1rem;
                font-size: .6rem;
            }
            .not-collect {
                float: left;
                width: 3.2rem;
                height: 1.25rem;
                line-height: 1.25rem;
                border-radius: .25rem;
                background-size: 3.2rem 2.7rem;
                .iconfont {
                    font-size: 0.5rem;
                }
                .shouc1 {
                    font-size: 0.5rem;
                }
            }

        }
    }

    /*底部样式*/
    .shop-foot-wrapper {
        position: fixed;
        left: 0;
        bottom: 0;
        display: table;
        width:100%;
        height: 2rem;
        line-height: 2rem;
        font-size: .65rem;
        background: #fff;
        border-top: 1px solid #e0e0e0;
        z-index: 2;
        ul {
            display: table-row;
            li {
                display: table-cell;
                text-align: center;
                .sub-group {
                    position: absolute;
                    background: #fff;
                    border: 1px solid #e0e0e0;
                    border-radius: .3rem;
                    bottom: 2.6rem;
                    width:40%;
                    margin-left: 5%;
                    dl {
                        padding: 0 0.75rem;
                        margin: 0 auto;
                        dd {
                            line-height: 2rem;
                            text-align: center;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    .sharp {
                        position: absolute;
                        width:100%;
                        height: .25rem;
                    }

                }
                .wall {
                    width: 0;
                    height: 1.25rem;
                    margin-top:.375rem;
                    float: right;
                    border-right: 1px solid #e0e0e0;
                    display: inline-block;
                }
            }
        }

    }

    /*tab-导航条*/
        .shop-tabs {
            display: flex;
            justify-content: space-around;
            width: 100%;
            font-size: .75rem;
            line-height: 2rem;
            border-top: 1px solid #dededf;
            border-bottom: 1px solid #dededf;
            background-color: #fff;
            .shop-tab-nav {
                width: 33.33%;
                text-align: center;
                span {
                    display: inline-block;
                    width: 100%;
                }
            }
        }

    //轮播图
    .container2 {
        position: relative;
        width: 100%;
        height: 5.8rem;
        max-height: 5.8rem;
        overflow: hidden;
        padding-left: 0;
        .swiper{
            position: relative;
            width: 100%;
            height: 5.8rem;
            .swiper-slide {
                a {
                    float: left;
                    width:100%;
                    height: 5.8rem;
                    text-decoration: none;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

        }
    }

    //轮播图下面图片
    .bt {
        width: 100%;
        height: .6rem;
        background: #f0f0f0;
        margin-top: -0.2rem;
    }
    .itemCon {
        overflow: hidden;
        font-size: .6rem;
        position: relative;
        .item {
            position: relative;
            width: 50%;
            height: 9.375rem;
            float: left;
            overflow: hidden;
            .item-pic {
                width: 100%;
            }
        }
    }
    .itemCon2 {
        overflow: hidden;
        font-size: .45rem;
        width: 100%;
        .item {
            float: left;
            width: 33.3333333333%;
            height: 8.325rem;
            img {
                width: 100%;
            }
        }
    }

    /*全部商品的头部*/
    .top-btn{
        background-color: #fff;
        width: 100%;
        height: 1.7585rem;
        display: flex;
        position: relative;
        top:-.2rem;
        left: 0;
        z-index: 999;
        .arrow{
            position: relative;
            overflow: hidden;
            .i-block1{
                position: absolute;
                top:-9px;
                left:0;
            }
            .i-block{
                position: absolute;
                top:-2px;
                left:0;
            }
            .gray{
                color:#999;
            }

        }
        li{
            flex:1;
            height: 1.7585rem;
            line-height:1.7585rem;
            text-align: center;
            font-size: 14px;
            color:#999;
        }
    }
</style>