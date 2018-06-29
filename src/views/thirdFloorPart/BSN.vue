<template>
    <div>
        <title-top></title-top>
        <router-link to="/bns">
            <div class="branner-top" style="background-image:url(http://img12.static.yhbimg.com/yhb-img02/2017/11/09/15/029bf12c695e6a349e0e2ea8e5cae5c882.jpg?imageMogr2/auto-orient/strip/thumbnail/x234/crop/750x234)">
                <div class="shopcover"></div>
                <img class="logo"  src="http://img11.static.yhbimg.com/yhb-img01/2017/11/02/10/014c5431cb72bc605a3a8033a89b0568dc.jpg?imageMogr2/thumbnail/100x100/extent/100x100/background/d2hpdGU=/position/center/quality/80" alt="">
                <h1 class="store-name">BSN</h1>
                <div class="fav-box">
                    <div class="favs">粉丝数:3.1w</div>
                    <div class="not-collect" :class="{'class-a':isA,'class-b':!isA}" @click="getShow">
                        <i class="iconfont icon-shoucang-copy styli"></i>
                        <span class="shouc1" @click="changeStatus">{{btnStatus?'收藏':'已收藏'}}</span>
                    </div>
                </div>

            </div>
        </router-link>
        <div class="shop-foot-wrapper">
            <ul>
                <li class="shop_footnav_one">
                    <span id="shop-category" @click="showToggle">商品分类</span>
                    <div class="sub-group" v-show="isShow">
                        <dl>
                            <dd>
                                <a href="javascript:;">数码3C</a>
                            </dd>
                            <dd style="border-top: 1px solid lightgrey">
                                <a href="javascript:;">生活电器</a>
                            </dd>
                        </dl>
                        <div class="sharp"></div>
                    </div>
                    <div class="wall"></div>
                </li>
                <li>
                    <a href="http://localhost:8080/shopintrothir">店铺简介</a>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import TitleTop from '../../components/common/titleTop'
    export default {
        name: "b-s-n",
        components: {TitleTop},
        data(){
            return{
                isA:false,
                btnStatus:true,
                isShow:false
            }
        },
        methods:{
            getShow(){
                this.isA=!this.isA;
            },
            changeStatus(){
                this.btnStatus=this.btnStatus?false:true;
            },
            showToggle(){
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style lang="less" scoped>
    .class-a {
        color: red;
    }
    .class-b {
        color: white;
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
</style>