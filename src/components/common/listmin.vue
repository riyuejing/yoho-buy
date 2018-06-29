<template>
    <div>
        <div class="list-wrap" style="top:10.5rem" ref="lis">
            <ul class="list-con">
                <li v-for="item in data" :class="getClass(item.goodsId)">
                    <img :src="(item.goodsImgs)[0]" :alt="item.goodsName">
                    <div class="desdetail">
                        <p class="prosname">{{item.goodsName}}</p>
                        <p class="aboutprice">
                            <span class="cuprice" :class="{'cuprice2':item.goodsPrice.oldprice}">{{item.goodsPrice.currentPrice | price}}</span>
                            <span v-if="item.goodsPrice.oldprice" class="oldprice">{{item.goodsPrice.oldprice | price}}</span>
                        </p>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bus from '../../components/common/bus'
    import BScroll from 'better-scroll'
    import TitleTop from '../../components/common/titleTop'
    export default {
        name: "listmin",
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
                primaryclass:this.myPrimaryClass,
                secondclass:this.mySecondclass
            }).then(({data})=>{
                this.data = data;
            });
        },
        mounted(){
            let listBscroll = new BScroll(this.$refs.lis,{click:true});
        },
        methods:{
            getClass(_id){
                return "id"+_id;
            },
        },
        filters:{
            price(price){
                return "¥"+price;
            }
        }
    }

</script>

<style lang="less" scoped>
    .list-wrap{
        position: absolute;
        /*top:10.5rem;*/
        bottom:0;
        background-color: #fff;
        width: 100%;
        padding: 0 .35rem;
        padding-top: .2rem;
        box-sizing: border-box;
        border-top: 1px solid #E5E6E5;
        overflow: hidden;
    .icon-htmal5icon26{
        font-size: 18px;
    }
    .list-con{
        width: 100%;
        padding-top:0.8205rem;
        overflow: hidden;
    li{
        position: relative;
        float: left;
        margin: .29295rem .43945rem 1.1719rem;
        width: 8.086rem;
        height: 14.8242rem;
        font-size: 12px;
    img{
        width: 100%;
        height: 10.7815rem;
    }
    .cover{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 10.7815rem;
        background-color: rgba(0,0,0,.6);
    .similar{
        position: absolute;
        top:50%;
        left:50%;
        margin-top: -1.757825rem;
        margin-left: -1.757825rem;
        width: 3.51565rem;
        height: 3.51565rem;
        color: #fff;
        background-color: #d0021b;
        font-size:17px;
        line-height: 3.51565rem;
        text-align: center;
        border-radius: 50%;
    }
    }
    .desdetail{
        font-size:12px;
        width:100%;
        height: 2.651rem;
        color: #444;
        transform: scale(.9);
    .prosname{
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        width:100%;
        height:1.8rem;
        margin: .43945rem 0 .29295rem;
        padding: .1465rem 0;
        box-sizing: border-box;
        line-height: 1.3;
    }
    .aboutprice{
        line-height: 0.645rem;
    .cuprice{
        color: #000;
        float: left;
    }
    .cuprice2{
        color: #d62927;
    }
    .oldprice{
        color: #b0b0b0;
        text-decoration: line-through;
        float: left;
    }
    .formore{
        float:right;
    }
    }
    }
    .saleout{
        position: absolute;
        left:0;
        top:9.961rem;
        width: 100%;
        height: 0.8205rem;
        background-color: #ffac5b;
        font-size: 12px;
        line-height: 0.8205rem;
        text-align:center;
        color: #fff;

    }
    .newpro{
        position: absolute;
        top:-0.8205rem;
        left:0;
        width: 1.758rem;
        height: 0.8205rem;
        background-color: #78dc7e;
        color: #fff;
        line-height: 0.8205rem;
        font-size: 12px;
        text-align: center;
    }
    }
    }
    }
</style>