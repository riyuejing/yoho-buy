<template>
    <div v-if="data">
        <div class="cartwrap">
            <div class="cart-logo">
                <i class="iconfont icon-ai-cart"></i>
            </div>
            <span class="cart-count">0</span>
        </div>
        <!--店铺-->
        <!--需要先判断搜索的内容是不是店铺,如果是的话显示内容-->
        <div class="brandwrap" v-if="data.seller">
            <div class="brandshop">
                <img :src="data.seller.shopLogo" :alt="data.seller.sellerName" class="brand">
                <span class="shopname">{{data.seller.sellerName}}</span>
                <router-link class="enter" :to="{name:'shop',params:{sellerName:data.seller.sellerName}}">
                    进入店铺
                    <i class="i-enter">	&gt</i>
                </router-link>
            </div>
        </div>
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


        <div class="list-wrap" ref="lis">
            <ul class="list-con">
                <li v-for="(item,index) in data.goodsList" :class="getClass(item.goodsId)">
                    <img :src="(item.goodsImgs)[0]" :alt="item.goodsName" @click="goToDetail(item,index)">
                    <div class="desdetail">
                        <p class="prosname" @click="goToDetail(item,index)">{{item.goodsName}}</p>
                        <p class="aboutprice">
                            <span class="cuprice" :class="{'cuprice2':item.goodsPrice.oldprice}">{{item.goodsPrice.currentPrice | price}}</span>
                            <span v-if="item.goodsPrice.oldprice" class="oldprice">{{item.goodsPrice.oldprice | price}}
                            </span>
                            <span class="formore" @click="isSimilar = !isSimilar">
                                <i class="iconfont icon-htmal5icon26"></i>
                            </span>
                        </p>
                    </div>
                    <div class="cover" v-show="isSimilar">
                        <div class="similar">找相似</div>
                    </div>
                    <div class="newpro" v-if="item.isNewsale">NEW</div>
                    <div class="saleout" v-if="item.isPresale">即将售罄</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "list",
        props:{
            query:String
        },
        data(){
            return {
                data:{},
                isSimilar:false
            }
        },
        mounted(){
            let listScroll = new BScroll(this.$refs.lis,{click:true});
            this.$http.get('/api/search',{
                params:{
                    keyword:this.query
                }
                }).then(({data})=>{
                this.data = data;
                console.log(this.data);
            })
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

        },
        methods:{
            getClass(_id){
                return "id"+_id;
            },
            goToDetail(obj,_index){
                console.log(1111);
                this.$router.push('/product');
                this.$store.commit('detailId',obj.goodsId);
                console.log(obj.goodsId);
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
    // @import "./iconfont.css";
    @import "list";
    .brandwrap{
        width: 100%;
        height: 2.34375rem;
        padding-bottom:0.58595rem;
        background-color: #F3F4F3;
        .brandshop{
            width: 100%;
            padding: 0 0.58595rem;
            box-sizing: border-box;
            height: 2.34375rem;
            background-color: #fff;
            .brand{
                width: 4.6875rem;
                height: 2.34375rem;
                display: inline-block;
                vertical-align: middle;
            }
            .enter{
                float: right;
                width: 3.71095rem;
                height: 2.34375rem;
                line-height: 2.34375rem;
                color: #999;
                font-size: 14px;
                .i-enter{
                    transform: rotateZ(-90deg);
                }
            }
        }

    }
</style>