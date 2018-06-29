<template>
    <div>
        <div class="title-top">
            <span class="iconfont icon-fanhui back" @click="goToLast"></span>
            <h2>购物车</h2>
            <span class="iconviewlist" @click="edit">{{changetext}}</span>
        </div>
        <!--先判断是否登录了 -->
        <div v-if="data.data.errorcode==1">
            <!-- 购物车内容 -->
            <div class="unregistered">
                <!-- 请先登录 -->
                <div class="warning">
                    <i class="icon-notification"></i>
                    <!-- 转登录页面 -->
                    <span>请您先<a href="/signIn">登录</a>可以同步电脑和手机中的商品</span>
                </div>
                <!-- 购物车 -->
                <div class="unregistered-cart">
                    <div>
                        <i class="iconfont icon-gouwuche"></i>
                        <p>您的购物车暂无商品</p>
                        <a href="/index">随便逛逛</a>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="data.status==200">
            <div class="confrimdelete" v-if="isBox">
                <div class="box" @click="isBox = false">
                    <div class="boxtop">您确定要从购物车中删除么</div>
                    <div class="boxbottom">
                        <p @click="isBox = false">取消</p>
                        <p @click="delGood">确定</p>
                    </div>
                </div>
            </div>
            <div class="cart-bottom">
                <div class="selectAll">
                    <p>
                        <!--选中-->
                        <i class="iconfont icon-xuanze" :class="{'icon-xuanze1':!isSelectAll}" @click="aboutSelectAll"></i>
                    </p>
                    <p> 全选</p>
                </div>
                <div class="zongji">
                    <div class="text" v-if="!isModify">
                        <p>总计:{{total | price}} <span>({{totalCount}}件)</span></p>
                        <p>不含运费</p>
                    </div>
                    <div class="btn-jiesuan" v-if="!isModify" @click="toJieSuan">结算</div>
                    <div class="btn-jiesuan shoucang" v-if="isModify" @click="shoucang">移入收藏夹</div>
                    <div class="btn-jiesuan" v-if="isModify" @click="isBox = !isBox">删除</div>
                </div>
            </div>
            <div>
                <!--<div v-if="data.errorcode !=1">-->
                <div class="coudan" v-if="forFare">
                    <span>再买{{299 | price}}即可免运费</span>
                    <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
                </div>
                <div class="coudan" v-if="could">
                    <span>购物满{{299 | price}}即可免运费</span>
                    <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
                </div>
                <div class="coudan" v-if="hasDone">
                    <span>购物满{{299 | price}}已免运费</span>
                    <a href="/list"><span>去凑单 <i> &gt;</i></span></a>
                </div>
                <ul class="cart-ul">
                    <!--  v-if="data"-->
                    <li class="cart-li" v-for="(item,index) in data.data">
                        <div class="select">
                            <i class="iconfont icon-xuanze" :class="{'icon-xuanze1':item.isSelect}"
                               @click="select(item,index)"></i>
                        </div>

                        <div class="con">
                            <img :src="item.goodsImgs[0]" :alt="item.goodsName" @click="goTo(item,index)">
                            <div class="des-text">
                                <div v-if="!isModify">
                                    <p class="itemname">{{item.goodsName}}</p>
                                    <p class="style">
                                        <span>颜色:{{item.color}}</span>
                                        <span>尺码:{{item.size}}</span>
                                    </p>
                                </div>
                                <div class="count">×{{item.count}}</div>
                                <!--点击编辑的时候-->
                                <div class="modify" v-if="isModify">
                                    <div class="change-num">
                                        <span @click="changeQuantity(item,-1,index)" class="dec">-</span>
                                        <input type="text" disabled :value="item.count"/>
                                        <span  @click="changeQuantity(item,1)" class="add">+</span>
                                    </div>
                                    <div class="change-style">
                                        <span class="styles">颜色:{{item.color}} 尺码:{{item.size}}</span>
                                        <span class="iconfont icon-xiajiantou" @click="getGoodsMsg(item,index)"></span>
                                    </div>
                                </div>
                                <p>{{item.goodsPrice.currentPrice*item.count | price}}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!---->
            <div class="list-wrap">
                <p  class="xinpin">为你优选新品</p>
                <ul class="list-con">
                    <li v-for="item in list" :class="getClass(item.goodsId)">
                        <img :src="(item.goodsImgs)[0]" :alt="item.goodsName">
                        <div class="desdetail">
                            <p class="prosname">{{item.goodsName}}</p >
                            <p class="aboutprice">
                                <span class="cuprice" :class="{'cuprice2':item.goodsPrice.oldprice}">{{item.goodsPrice.currentPrice | price}}</span>
                                <span v-if="item.goodsPrice.oldprice" class="oldprice">{{item.goodsPrice.oldprice | price}}</span>
                                <span class="formore" @click="showSimilar(item)">
                                <i class="iconfont icon-htmal5icon26"></i>
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
            <!--弹出选择页面-->
            <div class="choose" v-if="chooseAgain">
                <div class="con">
                    <div class="p1">
                        <img :src="goodsMsg.goodsImgs[0]" :alt="goodsMsg.goodsName">
                        <div>
                            <p>{{goodsMsg.goodsPrice.currentPrice | price}}</p>
                            <p v-show="pleChCo">请选择颜色、尺码</p>
                            <p v-show="yixuan">已选:{{keycolor}}、{{keysize}}</p>
                        </div>
                        <p class="circle" @click="chooseAgain =!chooseAgain">×</p>
                    </div>
                    <div class="p2">
                        <p class="left">颜色</p>
                        <!--r-test2 选中样式-->
                        <ul class="r-ul">
                            <li class="r-test2" :class="{'r-test':iscur===index}" v-for="(item,index) in
                            goodsMsg.goodsAttr.color" @click="tabclick(item,index)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="p3">
                        <p class="left">尺码</p>
                        <!--r-test2 选中样式-->
                        <ul class="r-ul">
                            <li class="r-test2" :class="{'r-test':iscur2===index}" v-for="(item,index) in
                            goodsMsg.goodsAttr.size" @click="tabclick2(item,index)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="p4">
                        <p class="left">数量</p>
                        <div class="likebtn">
                            <!--@click="changeQuantity(item,-1,index)" -->
                            <span class="dec" @click="changecount(-1)">-</span>
                            <!--:value="item.count"-->
                            <input type="text" disabled :value="changenum"/>
                            <!--@click="changeQuantity(item,1)"-->
                            <span  class="add" @click="changecount(1)">+</span>
                        </div>
                    </div>
                    <!--确定按钮-->
                    <p class="btn-queding" @click="yesMsg">确定</p>

                </div>

            </div>
        </div>
        <div class="atLeast">
            <p>请至少选择一件商品</p>
        </div>
        <div class="islike">
            <p>收藏成功</p>
        </div>
        <div class="iszero">
            <p>您选择的数量不能为0~~~</p>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
export default {
    name: "cart",
    data(){
        return{
            data:{},
            isSelectAll:true,
            confirmDelete:false,
            toDelIndex:-1,
            could:false,
            hasDone:false,
            forFare:true,
            isModify:false,
            list:{},
            chooseAgain:false,
            isBox:false,
            goodsMsg:{},
            changenum:1,
            hasChangeMsg:false,
            iscur:0,
            iscur2:0,
            nowClick:false,
            keycolor:'',
            keysize:'',
            pleChCo:true,
            yixuan:false,
            moindex:0,
            mogoodsid:0

        }
    },
    computed:{
        ...mapState({
            msg:(state)=>state.items
        }),
        //千万不能用箭头函数
        total(){
            var totalPrice = 0;
            this.data.data.forEach(function(goods){
                if(!goods.isSelect){
                    totalPrice +=goods.goodsPrice.currentPrice*goods.count;
                }
            });
            if(0<=totalPrice&&totalPrice<299){
                //再满可免
                this.could = true;
                this.hasDone = false;
                this.forFare = false;
            }else if(totalPrice>=299) {
                //已免
                this.hasDone = true;
                this.could = false;
                this.forFare = false;
            }
            return totalPrice;
        },
        totalCount(){
            let totalcount = 0;
            this.data.data.forEach(function(goods){
                goods.count = goods.count - 0;
                if(!goods.isSelect){
                    totalcount += goods.count;
                }
            });
            return totalcount;
        },
        changetext(){
            if(this.isModify){
                return '完成';

            }else{
                return "编辑";
            }

        },
        selectNum(){
            let num = 0;
            this.data.data.forEach((goods)=>{
                if(!goods.isSelect){
                    num++;
                }

            });
            return num;
        }
    },
    mounted(){
      //let bScroll = new BScroll(this.$refs.cartdiv,{click:true});

    },
    created(){
        this.$http.get('/api/user/getCart').then((data)=>{
            this.data = data;
            //console.log(this.data);
        });
        this.$http.get('/api/goods/new-goods').then(({data})=>{
            this.list = data;
        });
    },
    methods:{
        toJieSuan(){
            this.$router.push('/personalCenter/orders');
        },
        //数量重新做选择
        getGoodsMsg(obj,_index){
            this.moindex = _index - 0;
            this.mogoodsid = obj.goodsId - 0;
            this.chooseAgain = !this.chooseAgain;
            this.$http.get('/api/goods',{
                params:{
                    goodsid:obj.goodsId
                }
            }).then(({data})=>{
                this.goodsMsg = data;
            });
        },
        //按确定按钮
        yesMsg(){
            this.hasChangeMsg = true;
            //颜色尺码数量 keycolor keysize this.changenum
            this.data.data[this.moindex].color = this.keycolor;
            this.data.data[this.moindex].size = this.keysize;
            this.data.data[this.moindex].count = this.changenum;
            this.chooseAgain = !this.chooseAgain;
            //console.log(this.data.data);
            //向后台发送消息
            this.$http.get('/api/user/editCart',{
                params:{
                    goodsid:this.mogoodsid,
                    size:this.keysize,
                    color:this.keycolor,
                    count:this.changenum
                }
            })

        },
        //颜色尺寸的选择
        tabclick(obj,_index){
            this.keycolor = obj;
            if(this.keycolor == ''){
                this.pleChCo = true;
            }else{
                this.pleChCo = false;
                this.yixuan = true;
            }
            this.iscur = _index;
        },
        tabclick2(obj,_index){
            this.keysize = obj;
            this.iscur2 = _index;
        },
        goToLast(){
            this.$router.go(-1);
        },
        goTo(obj){
            this.$router.push({
                path:'/product',

            })
        },
        //重新选取数据
        changecount(val){
            if(this.changenum == 1 && val == -1){
                this.changenum = 1;
                //弹框 您选择的数量不能为0
                $('.iszero').show();
                setInterval(function(){
                    $('.iszero').hide();
                },1000);
            }else{
                this.changenum += val;
            }
        },
        //编辑部分
        changeQuantity(good,val,_index){
            good.count = good.count - 0;
            if(good.count == 1 && val == -1){
                this.confirmDelete = true;
                this.toDelIndex = _index;
            }else{
                good.count += val;
            }
        },
        edit(){
           this.isModify = !this.isModify;
           // console.log(this.isModify);
            //弹出来了
            if(this.isModify){
                this.isSelectAll = false;
                this.data.data.forEach((good)=>{
                    if(good.isSelect == undefined){
                        this.$set(good,"isSelect",true);
                    }
                })
            }else{
                //弹出的消失
                this.isSelectAll = true;
                this.data.data.forEach((good)=>{
                    if(good.isSelect == undefined){
                        this.$set(good,"isSelect",false);
                    }
                })
            }

        },
        //收藏
        shoucang(){
            this.data.data.forEach(function(goods){
                //true没有被选中的,如果没有选中的,如果没有false
                if(!goods.isSelect){
                    //有选中的进行收藏 传到后台
                    this.$http.get('/api/user/addCollection',{
                        params:{
                            goodsid:goods.goodsId
                        }
                    });
                    //console.log(goods);
                    $('.islike').show();
                    setInterval(function(){
                        $('.islike').hide();
                    },1000);
                }else{
                    //没有选中的 弹出至少选一个商品的弹框
                    $('.atLeast').show();
                    setInterval(function(){
                        $('.atLeast').hide();
                    },1000);
                }
            });



        },
        //删除
        delGood(){
            console.log(this.selectNum);
            // console.log(this.data.data);
            if(this.selectNum <= 0){
                $('.atLeast').show();
                setInterval(function(){
                    $('.atLeast').hide();
                },1000);
            }
            var arr = [];
            this.data.data.forEach((goods) => {
                console.log(goods.isSelect);
                if(goods.isSelect){
                    arr.push(goods);
                }

            })

            console.log(arr);
            this.data.data = arr;
            // this.data.data = this.data.data.map((goods)=>{
            //     //true没有被选中的,选出没有被选中的,然后替换到现在的data中
            //     //选中的并且按了按钮 向后头发送选中的信息
            //     // this.$http.get('api//user/removeCart',{
            //     //     params:{
            //     //         goodsid:goods.goodsId,
            //     //         size:goods.size,
            //     //         color:goods.color,
            //     //         count:goods.count
            //     //     }
            //     // })
            //     // if(goods.isSelect){
            //     //     return goods;
            //     // }
            //     console.log(goods);
            // });
        },
        isCheckAll(){
            var flag = true;
            this.data.data.forEach((goods)=>{
                //isSelect为true的话实际上是未选中 只要有未选中的就不是全选
                if(goods.isSelect){
                    flag = false;
                }
            });
            //isSelectAll,true是选中
            if(!flag){
                this.isSelectAll = false;
            }else{
                this.isSelectAll = true;
            }
        },
        select(obj,index){
            if(obj.isSelect == undefined){
                this.$set(obj,'isSelect',true);
            }else{
                obj.isSelect = !obj.isSelect;
            }

            this.isCheckAll();
        },
        //底部的全选与非全选
        aboutSelectAll(){
            //如果item.isSelectAll为true可以设置 this.isSelectAll
            if(!this.isSelectAll){
                this.isSelectAll = true;
                this.data.data.forEach((goods)=>{
                    goods.isSelect = false;
                });
            }else{
                this.isSelectAll = false;
                this.data.data.forEach((good)=>{
                    good.isSelect = true;
                })
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
    filters:{
        price(money){
            return "¥"+money.toFixed(2);
        }
    }
};
</script>

<style scoped lang="less">
@import './iconfont.css';
@import '../common/list/list';
//请至少选择一件商品
.atLeast,.islike,.iszero{
    z-index: 10000;
    border-radius: 0.65rem;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-1rem;
    margin-left:-5rem;
    width: 10rem;
    height:2rem;
    display: none;
    background-color: rgba(0,0,0,.5);
    p{
        text-align: center;
        width:100%;
        height: 2rem;
        line-height:2rem;
        color:#fff;
        font-size:14px;
    }
}
//删除
.confrimdelete{
    width:100%;
    height:100%;
    z-index: 999;
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.5);
    .box{
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-3.15rem;
        margin-left:-6.75rem;
        width:13.5rem;
        height:6.3rem;
        border-radius: .5rem;
        background-color: rgba(255,255,255,.84);
        font-size: 16px;
        .boxtop{
            text-align: center;
            line-height: 4.1rem;
            color:#000;
            height: 4.1rem;
            border-bottom: 1px solid #ccc;
        }
        .boxbottom{
            height:2.2rem;
            width:100%;
            p{
                text-align: center;
                float:left;
                width:49%;
                height:2.2rem;
                line-height: 2.2rem;
            }
            p:first-child{
                border-right:1px solid #ccc;
            }
            p:last-child{
                color: #d0021b;
            }
        }

    }
}
//
.list-wrap{
    position:relative;
    top:0;
    left:0;
    .xinpin{
        height:4.4rem;
        width:100%;
        text-align: center;
        line-height: 4.4rem;
    }

}
//弹出页
.choose{
    position: fixed;
    z-index: 333;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.3);
    font-size:16px;
    .con{
        background-color: #fff;
        width:100%;
        height: 23.3445rem;
        position: absolute;
        left:0;
        bottom:0;
        z-index: 666;
        padding:0 0.875rem;
        box-sizing: border-box;
        .btn-queding{
            position: absolute;
            z-index: 777;
            left:0;
            bottom: 0;
            width: 100%;
            height: 2.35rem;
            background-color: #d0021b;
            color: #fff;
            line-height: 2.35rem;
            text-align: center;
        }
        .p1{
            margin-top:0.875rem;
            position: relative;
            width: 100%;
            height:5rem;
            padding-bottom:0.875rem;
            border-bottom:1px solid #e6e6e6;
            img{
                position: relative;
                top:-1.9rem;
                width:4.7rem;
                height:6.272rem;
                border: 1px solid #e6e6e6;
                float:left;
                margin-right: 1rem;
            }
            div{
                float:left;
                p{
                    color:#000;
                    font-size:14px;
                    line-height: 1.7;
                }
                p:first-child{
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .circle{
                position: absolute;
                top:0;
                right:0;
                width:0.9rem;
                height: 0.9rem;
                line-height: 0.9rem;
                border-radius: 50%;
                text-align: center;
                background-color: #B0B1B0;
                color:#fff;
            }

        }
        .p2,.p3{
           width:100%;
            height:2.625rem;
            border-bottom:1px solid #e6e6e6;
            margin:0.75rem 0;
            .left{
                width:2rem;
                height:2.625rem;
                line-height: 2.625rem;
                float:left;
            }
            .r-ul{
                height:100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                .r-test2{
                    width: 3.5rem;
                    padding:0 0.3rem;
                    margin-right:8px;
                    font-size:12px;
                    height: 1.65rem;
                    line-height:1.65rem;
                    border-radius:0.3rem;
                    text-align:center;
                    color:#000;
                    background: #fff;
                    border:1px solid #000;
                }
                li.r-test{
                    width: 3.5rem;
                    padding:0 0.3rem;
                    margin-right:8px;
                    font-size:12px;
                    height: 1.65rem;
                    line-height:1.65rem;
                    background: #d0021b;
                    color:#fff;
                    border:1px solid #e10;
                    border-radius:0.3rem;
                    text-align:center;
                }
            }


            .right{
                float:left;
            }
        }
        .p4{
            .left{
                width:2rem;
                height:2.625rem;
                line-height: 2.625rem;
                float:left;
            }
            .likebtn{
                float:left;
                border: 1px solid #dfdfdf;
                height:2.625rem;
                span{
                    text-align: center;
                    display: inline-block;
                    width:2.35rem;
                    font-size: 1rem;
                    height:2.625rem;
                    line-height: 2.625rem;
                }
                .dec{
                    border-right: 1px solid #dfdfdf;
                }
                .add{
                    border-left: 1px solid #dfdfdf;
                }
                input{
                    vertical-align: top;
                    font-size: 16px;
                    width: 2.6rem;
                    height: 2.35rem;
                    text-align: center;
                    border:0;
                }
            }
        }

    }
}

//底部
.cart-bottom{
    z-index: 222;
    text-align: center;
    font-size:.575rem;
    width:100%;
    height: 3rem;
    padding: 0.45rem;
    box-sizing: border-box;
    position:fixed;
    left:0;
    bottom: 0;
    background-color: #fff;
    .selectAll{
        float: left;
        width: 2.5rem;
        height: 2.1rem;
        text-align: center;
        p{
            height:1.1rem;
            line-height:1.1rem;
            font-size: .65rem;
            color: #666;
            i{
                font-size:1rem;
                color:#000;
            }
        }

    }
    .zongji{
        float:right;
        .text{
            float:left;
            text-align: right;
            p{
                width:9rem;
                height: 1.1rem;
                color:#999;
                line-height:1.1rem;
            }
            p:first-child{
                color: #d0253b;
                font-size: .8rem;
            }

        }
        .btn-jiesuan{
            float:left;
            width: 3.55rem;
            height: 2.05rem;
            line-height:2.05rem;
            padding:1px 0.35rem 2px;
            margin:0 0.35rem;
            background-color: #d1021c;
            color:#fff;
            font-size:14px;

        }
        .shoucang{
            background-color: #444444;
        }
    }
}

//列表
.cart-ul{
    width: 100%;
    background-color: #EFF0EF;
    overflow: hidden;
    .cart-li{
        background-color: #fff;
        width: 100%;
        height: 6.15rem;
        /*border:1px solid red;*/
        margin-bottom:10px;
        .select{
            width: 2.5rem;
            height:100%;
            text-align: center;
            line-height: 6.15rem;
            .iconfont {
                color: #000;
                font-size: 1rem
            }
            float:left;
        }
        .con{
            box-sizing: border-box;
            width:16.25rem;
            padding:0.5rem 0.75rem 0.5rem 0;
            height:6.15rem;
            /*border:1px solid yellow;*/
            float: left;
            font-size:13px;
            line-heigth:1.2;
            color: #999;
            img{
                width: 3.8rem;
                min-height: 5.1rem;
                float: left;
            }
            .modify{
                float:left;
                width: 7rem;
                height: 3.7rem;
                border: 1px solid #dfdfdf;
                .change-num{
                    border-bottom: 1px solid #dfdfdf;
                    span{
                        width:28%;
                        font-size: 1rem;
                    }
                    .dec{
                        border-right: 1px solid #dfdfdf;
                    }
                    .add{
                        border-left: 1px solid #dfdfdf;
                    }
                    input{
                        font-size: 16px;
                        width: 38.5%;
                        text-align: center;
                        border:0;
                    }
                }
                .change-style{
                    span{
                        padding-left:5px;
                    }
                    .styles{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                    }
                    .iconfont{
                        vertical-align: top;
                    }
                }
                div{
                    height:1.9rem;
                    span{
                        color:#000;
                        display: inline-block;
                        height:1.9rem;
                        line-height:1.9rem;
                        text-align: center;
                        font-size:12px;
                    }
                    .iconfont{
                        color:#444;
                        font-size:16px;
                        font-weight: bold;
                    }
                }

            }
            .des-text{
                width: 10.7rem;
                height:4.65rem;
                margin-left: .8rem;
                padding-top: .5rem;
                float:left;
                line-height:1.5;
                position: relative;
                .count{
                    position: absolute;
                    top:.5rem;
                    right: 0;
                }
                p{
                    disply:-webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:2;
                    overflow: hidden;
                    width:90%;
                    color: #d0253b;
                }
                p.style{
                    color: #b6b6b6;
                    span:first-child{
                        padding-right:8px;
                    }
                }
                .itemname{
                    font-size:14px;
                    color:#000;

                }

            }

        }
    }
}

//运费提示
    .coudan{
         height:1rem;
        padding: 0.375rem 0.75rem;
        background: #ff7f81;
        span{
            height: 1rem;
            line-height: 1rem;
            font-size:12px;
            color:#fff;
            float:left;

        }
        span:last-child{
            float: right;
            i{
                margin-left:5px;
            }
        }
        
     }
// 购物车头部
    .iconfont{
        color: white;
    }
    .title-top{
        z-index: 6;
        box-sizing: border-box;
        top:0;
        left:0;
        width:100vw;
        height: 2.625rem;
        line-height: 2.625rem;
        background-color:#4f4138;
        background-image: linear-gradient(#323232,#414141);
        color:#fff;
        .back,.iconviewlist{
            position: absolute;
            top: 0;
            display: block;
            width: 2.625rem;
            height: 2.625rem;
            line-height: 2.625rem;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            vertical-align: baseline;
        }
        .iconviewlist{
            font-size: 14px;
            right: 0;
            font-weight: normal;
        }
        h2{
            font-size: 1.05rem;
            font-weight: 400;
            text-align: center;
        }
    }
//购物车内容
.unregistered {
  background: #f0f0f0;
  .warning {
    padding-top: 0.5rem;
    span {
      height: 1.35rem;
      padding: 0.5rem 0.575rem;
      color: #24acaa;
      text-align: center;
      font-size: 0.825rem;
      box-sizing: content-box;
    }
    .icon-notification{
      // background: url(./warning.png) no-repeat;
      font-size: 1rem;
      display: inline-block;
      margin-left: 1rem;
      vertical-align: baseline;
      color:  #24acaa;

    }
    a {
      display: inline-block;
      background: #ed0010;
      color: #fff;
      width: 2.35rem;
      height: 1.35rem;
      line-height: 1.35rem;
    }
  }
  .unregistered-cart {
    div {
      padding-bottom: 20%;
      margin-top: 3.3rem;
    }
    .icon-cart{
      // background: url(./cart.png) no-repeat;
      font-size: 4.5rem;
      display: inline-block;
      margin-left: 6.9rem;
      vertical-align: bottom;
      color:#444
    }
    p {
      color: #444;
      padding: 0.6rem 0;
    //   display: block;
      font-size: 0.6rem;
      text-align: center;
    }
    a {
      width: 27%;
      height: 1.4rem;
      overflow: hidden;
      line-height: 1.4rem;
      border: 1px solid #505050;
      border-radius: 5px;
      margin: 0 auto;
      color: #fff;
      background: #444;
      font-size: 0.6rem;
      text-align: center;
      display: block;
    }
  }
}
</style>
