<template>
    <div class="icons-wrapper">
        <ul class="icons-list">
            <li class="icons-item" v-for="(item,index) in items" :class="getClass(index)">
                <a class="imgebar" @click="toList(index)"><img :src="item.src" alt=""></a>
                <a class="linkbar">{{item.name}}</a >
            </li>
        </ul>
    </div>
</template>

<script>
    import Bus from '../components/common/bus.js'
    export default {
        name: "one-floor",
        data(){
            return{
                items:[
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01155cce42c22f29c305d5767dd73fe983.png?imageView2/2/w/98/h/98/q/60",
                        bgimg:"http://img12.static.yhbimg.com/yhb-img01/2016/02/29/07/025d532df4d76507c663157d7f34927324.jpg?imageView2/2/w/640/h/240/q/60",
                        name:"新品到着",
                        tabs:['6月25号','人气单品','本周上新','销量'],
                        toRoute:'goods/new-goods',
                        hrefs:"/lifestyle-new?from=index&query=new-goods"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/05/08/11/01fc18512be1c0103f74712eec27182a9b.png?imageView2/2/w/98/h/98/q/60",
                        bgimg:"http://img10.static.yhbimg.com/yhb-img01/2016/08/29/11/0106011b3311204672050f2203055d25f6.jpg?imageView2/2/w/640/h/240/q/90",
                        name:"热销TOP",
                        tabs:['TOP100','美妆个护','玩具礼品','厨具餐具','影音娱乐','手机/配件'],
                        toRoute:'goods/top-sale',
                        hrefs:"/lifestyle-new?from=index&query=top-sale"

                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/03/02/09/018c7c0e43d281755461e41ef07e5de089.png?imageView2/2/w/98/h/98/q/60",
                        name:"领劵中心",
                        hrefs:"/stock?from=index&query=lingquan"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/02/03/09/0189bc583b9c0fc55a983116b3e1c460dc.png?imageView2/2/w/98/h/98/q/60",
                        name:"全部分类",
                        hrefs:"/cate"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/014647f5d597273cca382e6a2cc8cdad08.png?imageView2/2/w/98/h/98/q/60",
                        name:"美妆馆",
                        toRoute:'goods/goods-class',
                        primaryclass:'美妆馆',
                        hrefs:"/lifestyle-new?from=index&query=meizhuangguan"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/03/20/16/017cc81de99ebaa7cfa0f70aee3e4c4194.png?imageView2/2/w/98/h/98/q/60",
                        name:"玩意儿",
                        toRoute:'goods/goods-class',
                        primaryclass:'玩具',
                        hrefs:"/lifestyle-new?from=index&query=玩具"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/05/08/11/01e60701b0835a909b269f617bdb1cf351.png?imageView2/2/w/98/h/98/q/60",
                        name:"试听盛宴",
                        toRoute:'goods/goods-class',
                        primaryclass:'数码3C',
                        hrefs:"/lifestyle-new?from=index&query=视听盛宴"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/02/03/09/01f8ff4c9195b7f7f4774e911a6ea7936b.png?imageView2/2/w/98/h/98/q/60",
                        name:"折扣专区",
                        bgimg:"http://img10.static.yhbimg.com/yhb-img01/2018/03/06/17/01bccbb5f9bf1ce700130aa6beeea5d606.jpg?imageView2/2/w/640/h/240/q/60",
                        tag:true,
                        toRoute:'goods/goods-class',
                        primaryclass:'玩具',
                        hrefs:"/lifestyle-new?from=index&query=scale"
                    }
                ],
                money:'a'
            }

        },
        methods: {
            getClass(_index){
                return "item"+_index;
            },
            toList(_index){
                this.$store.commit("add",this.items[_index]);
                this.$router.push(this.items[_index].hrefs);
            }
        }
    }
</script>

<style lang="less" scoped>
    .icons-wrapper {
        overflow: hidden;
        box-sizing: border-box;
        padding: 15px 0 2px;
        background: #fff;
        background-size: 100% 100%;
        border-bottom: 1px solid #e0e0e0;
        .icons-list {
            overflow: hidden;
            .icons-item {
                float: left;
                margin-bottom: .25rem;
                width: 25%;
                height: 70px;
                text-align: center;
                .imgebar {
                    display: block;
                    margin: 0 auto;
                    text-align: center;
                    width: 40px;
                    height: 40px;
                    line-height: 40px;
                    box-sizing: border-box;
                    overflow: hidden;
                    border: 1px solid #e0e0e0;
                    border-radius: 50%;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .linkbar {
                    display: block;
                    line-height: 22px;
                    font-size: 12px;
                    transform: scale(.9);
                    color: #444;
                }

            }

        }

    }
</style>