<template>
    <div>
        <title-top title="我的收藏"></title-top>
        <div class="tab">
            <p :class="{tabcolor:!isClick}" @click="isClick = !isClick">收藏的商品</p>
            <p :class="{tabcolor:isClick}" @click="isClick = !isClick">收藏的品牌</p>
        </div>
        <div class="con" ref="lis" v-show="lisData">
            <ul v-show="lisData">
                <li v-for="(item,index) in lisData">
                    <img class="proimg" :src="item.goodsImgs[0]" @click="goToDetail(item,index)">
                    <div class="text">
                        <p>{{item.goodsName}}</p>
                        <p>
                            <span class="redprice" v-if="item.goodsPrice.currentPrice">{{item.goodsPrice
                                .currentPrice|price}}</span>
                            <span class="oldprice" v-if="item.goodsPrice.oldPrice">{{item.goodsPrice.oldPrice|price}}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div v-show="!lisData">
            <p>暂时没有收藏的商品哦~~~</p>
            <p>去逛逛</p>
        </div>
        <div v-show="!lisData">
            <p>未登录</p>
            <p>请您登录</p>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import TitleTop from '../components/common/titleTop'
    import FooterBottom from '../components/common/footerTwo'
    export default {
        name: "mylike",
        data(){
            return {
                isClick:false,
                lisData:{}
            }
        },
        components:{
            TitleTop,FooterBottom
        },
        methods:{
            goToDetail(obj,_index){
                this.$router.push('/product');
                this.$store.commit('detailId',obj.goodsId);
                //console.log(obj.goodsId);
            }
        },
        mounted(){
            this.$http.get('/api/user/getCollections').then(({data}) => {
                this.lisData = data;
                //console.log(this.lisData);
            })
        },
        filters:{
            price(money){
                return "¥"+money.toFixed(2);
            }
        }
    }
</script>

<style lang="less" scoped>
    .footertwo{
        margin-bottom:0;
        position: absolute;
        bottom:0;
        left:0;
    }
    //内容区的
    div.con{
        position:absolute;
        top:5.1275rem;
        width:100%;
        li{
            overflow: hidden;
            /*border:1px solid red;*/
            padding:0.85rem 0 0 1.1rem;
            box-sizing: border-box;
            width:100%;
            /*height: 4.10155rem;*/
            .proimg{
                float:left;
                width:2.6365rem;
                height: 3.5155rem;
            }
            .text{
                float:right;
                width: 14.5rem;
                height: 4.10155rem;
                padding-bottom:0.58595rem;
                border-bottom: 1px solid #e0e0e0;
                p{
                    font-size: 14px;
                    color:#000;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                .redprice{
                    color: #d1021c
                }
                .oldprice{
                    text-decoration: line-through;
                    margin-left: .375rem;
                    color: #b0b0b0;
                }

            }
        }
    }

    //tab
.tab{
    font-size:14px;
    width: 100%;
    height: 2.528rem;
    border: 1px solid #DFE0DF;
    display: flex;
    p{
        text-align: center;
        flex:1;
        height: 2.528rem;
        line-height: 2.528rem;
        color: #b0b0b0;
    }
    p:first-child{
        text-align: center;
        border-right:1px solid #DFE0DF;
    }
    .tabcolor{
    color:#000;
}
}
</style>