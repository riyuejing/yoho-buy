<template>
    <!--"新品到着"页面-->
    <div class="newpage">
        <div class="cartwrap">
            <div class="cart-logo">
                <i class="iconfont icon-gouwuche"></i>
            </div>
            <span class="cart-count">0</span>
        </div>
        <title-top :title='msg.name'></title-top>
        <div class="dzimg" v-if="msg.bgimg">
            <ul class="new-img">
                <li class="new-slide">
                    <a href="">
                        <img :src="msg.bgimg" :alt="msg.name">
                    </a >
                </li>
            </ul>
        </div>
        <!--special-->
        <div class="only-forsale" v-if="msg.tag">
            <p>最新降价</p>
        </div>
        <!-- list-->
        <ul class="top-btn" v-if="msg.tabs == void 0">
            <li>默认
                <i class="iconfont icon-jiantou-"></i>
            </li>
            <li>新品</li>
            <li>人气</li>
            <li class="tab-price">价格
                <span class="arrow">
                    <i class="iconfont icon-shang i-block1"></i>
                    <i class="iconfont icon-arrow1 i-block"></i>
                </span>
            </li>
            <li>筛选
                <i class="iconfont icon-jiantou-"></i>
            </li>
        </ul>
        <ul class="top-btn" v-if="msg.tabs">
            <li v-for="tab in msg.tabs">{{tab}}</li>
            <li>筛选
                <i class="iconfont icon-jiantou-"></i>
            </li>
        </ul>
        <div class="list-wrap">
            <ul class="list-con">
                <li v-for="(item,index) in data" :class="getClass(item.goodsId)">
                    <img :src="(item.goodsImgs)[0]" :alt="item.goodsName" @click="goToDetail(item,index)">
                    <div class="desdetail">
                        <p class="prosname" @click="goToDetail(item,index)">{{item.goodsName}}</p >
                        <p class="aboutprice">
                            <span class="cuprice" :class="{'cuprice2':item.goodsPrice.oldprice}">{{item.goodsPrice.currentPrice | price}}</span>
                            <span v-if="item.goodsPrice.oldprice" class="oldprice">{{item.goodsPrice.oldprice | price}}</span>
                            <span class="formore" @click="showSimilar(item)">
                                <i class="iconfont icon-gengduo"></i>
                            </span>
                        </p >
                    </div>
                    <div class="cover" v-show="item.isSimilar">
                        <div class="similar">找相似</div>
                    </div>
                    <div class="newpro" v-if="item.isNewsale">NEW</div>
                    <div class="saleout" v-if="item.isPresale">即将售罄</div>
                </li>
            </ul>
        </div>
        <!-- 2个底部 -->
        <footer-two></footer-two>
        <footer-home></footer-home>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Bus from '../components/common/bus.js'
    import TitleTop from "../components/common/titleTop"
    import FooterTwo from '../components/common/footerTwo' //商品详情/列表底部
    import FooterHome from '../components/common/footerHome' //首页底部
    export default {
        name: "new",
        components:{
            TitleTop,FooterTwo,FooterHome
        },
        data(){
            return {
                piture:{
                    src:"http://img12.static.yhbimg.com/yhb-img01/2016/02/29/07/025d532df4d76507c663157d7f34927324.jpg?imageView2/2/w/640/h/240/q/60"
                },
                data:{},
                indexData:{},
            }

        },
        created(){
            this.$http.get('/api/'+this.msg.toRoute,{
                params:{
                    primaryclass:this.msg.primaryclass
                }
                }).then(({data})=>{
                this.data = data;
            });

        },
        mounted(){
            $('.top-btn li').click(function(){
                $(this).css("color","#000").siblings().css("color","#999");
                $(".i-block1").css("color",'#999').next().css("color",'#999');
            })
            var flag = true;
            $(".tab-price").click(function(){
                if(flag){
                    $(".i-block1").css("color",'#000');
                    $('.i-block').css("color","#999");
                    flag = !flag;
                }else{
                    $(".i-block1").css("color",'#999');
                    $('.i-block').css("color","#000");
                    flag = !flag;
                }
            });
            Bus.$on("sendDatas",(data)=>{
                this.indexData= data;
            })
        },
        computed:{
            ...mapState({
                msg:(state)=>state.data.OneFloor
            })
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
            goToDetail(obj,_index){
                this.$router.push('/product');
                this.$store.commit('detailId',obj.goodsId);
                //console.log(obj.goodsId);
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
    @import '../components/common/list/list.less';
    /*@import './search/iconfont.css';*/
    .only-forsale{
        width:100%;
        height: 2.9rem;
        padding:0.8496rem 0.8789rem 0;
        box-sizing: border-box;
        background-color: #EFF0EF;
        p {
            border: 1px solid #DFE0DF;
            height: 1.955rem;
            line-height: 2.14rem;
            text-align: center;
            color: #B0B1B3;
            background-color: #fff;
            font-size:17px;
        }

    }
    .top-btn .arrow .i-block1{
        top: -3px;
    }
    .top-btn .arrow .i-block{
        top: 4px;
    }
    .list-wrap{
        position: relative;
        top:0;
        left:0;
    }
    .dzimg {
        height: 5.9rem;
        width: 100%;
        max-height: 5.9rem;
        .new-img {
            position: relative;
            li {
                width: 100%;
                height: 5.9rem;
                img {
                    display: block;
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

    .list-nav {
        border-top:.05rem solid #fff;
        border-bottom: 1px solid #e6e6e6;
        .navnav {
            float: left;
            width: 25%;
            height: 1.65rem;
            line-height: 1.65rem;
            text-align: center;
            font-size: .575rem;
            color: #999;
        }
    }
    .good-info {
        float: left;
        margin:0.25rem .375rem 1rem;
        width: 6.9rem;
        height: 12.65rem;
        .tag-container {
            overflow: hidden;
            width:100%;
            height: .7rem;
        }
        .good-detail-img {
            position: relative;
            height: 9.2rem;
            img {
                display: block;
                width:100%;
                height: 9.2rem;
            }
        }
        .good-detail-text {
            position: relative;
            .name a {
                margin: .375rem 0 .25rem;
                min-height: 1.25rem;
                color:#444;
                line-height: .75rem;
                padding:.125rem 0;
                overflow: hidden;
                height: 1.5rem;
            }
            .price{
                .sale-price {
                    color:#d62927;
                }
                .market-price {
                    font-size:12px;
                    margin: 0 0 0 .125rem;
                    color: #b0b0b0;
                    text-decoration: line-through;
                }
            }
        }
    }
</style>