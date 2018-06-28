<template>
    <div>
        <title-top title="商品列表"></title-top>
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
    </div>
</template>

<script>
    import Bus from '../components/common/bus'
    import BScroll from 'better-scroll'
    import TitleTop from '../components/common/titleTop'
    export default {
        name: "lcate",
        components:{
          TitleTop
        },
        data(){
            return {
                data:{},
                myPrimaryClass:'',
                mySecondclass:''
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
        mounted(){
            let listScroll = new BScroll(this.$refs.lis,{click:true});
            $('.top-btn li').click(function(){
                $(this).css("color","#000").siblings().css("color","#999");
                $(".i-block1").css("color",'#999').next().css("color",'#999');
            });
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
            showSimilar(item){
                if(item.isSimilar == undefined){
                    this.$set(item,"isSimilar",true);
                }else{
                    item.isSimilar = !item.isSimilar;
                }
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
    @import "../components/common/list/list";
    .list-wrap{
        top:4.5rem; 
    }
</style>