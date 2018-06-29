<template>
    <div class="hot-fication">
        <ul class="category-list">
            <li v-for="(hot,index) in hots" @click="toList(hot,index)">
                <a>
                    <div class="img-box">
                        <img :src="hot.src" alt="">
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Bus from '../components/common/bus'
    export default {
        name: "two-floor",
        data(){
            return{
                hots:[
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/01203e992f56c4a26f12e2e55f28f2de3a.jpg?imageView2/2/w/140/h/140/q/60",
                        secondclass:"礼品"
                    },
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/017c60de11e3623ab7cbf9e0396d49a969.jpg?imageView2/2/w/140/h/140/q/60",
                        secondclass:"玩具模型"
                    },
                    {src:"http://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/0197dfa87ab57aebd31869eec3896c76ce.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"手机配件"},
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/01f601374e5cc2bbc9b073d9e6421615b8.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"香水彩妆"},
                    {src:"http://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/01258fc411d1699da54acdd75bb832319b.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"影音娱乐"},
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/01a77ab6e27debd73821d5d31073de6147.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"面部护肤"},
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/013f48663cd1e4dd8c2ccf92cfbdfae1e8.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"生活用品"},
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/017693e80e077b0978c1d8731943f5bce2.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"水具洒具"},
                    {src:"http://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/01c71898e13ad3f3eb2d19b24306190346.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"文具杂志"},
                    {src:"http://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/01cc0885e4f52ebb40f16352492774bd81.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"家纺"},
                    {src:"http://img11.static.yhbimg.com/yhb-img01/2017/12/14/09/013ad8179f744ee9feb4f3e298c0c5461d.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"体育用品"},
                    {src:"http://img10.static.yhbimg.com/yhb-img01/2017/12/14/09/014fc393ff172e178be9c797d61ad4d15e.jpg?imageView2/2/w/140/h/140/q/60", secondclass:"家装软饰"}
                ]
            }
        },
        methods:{
            toList(obj,_index){
                setInterval(()=>{
                    Bus.$emit("indexsecondclass",obj.secondclass);
                },500);
                this.$router.push({
                    path:'/list',
                    query: {
                        from: "cate",
                        query: obj.secondclass
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .hot-fication {
        border-bottom: 1px solid #e0e0e0;
        .category-list {
            overflow: hidden;
            background: #fff;
            li {
                float: left;
                width: 25%;
                height: 5.0977rem;
                border-top: 1px solid #e0e0e0;
                border-left: 1px solid #e0e0e0;
                box-sizing: border-box;
                overflow: hidden;
                .img-box {
                    width:100%;
                    height: 100%;
                    line-height: 3.85rem;
                    text-align:center;
                    overflow: hidden;
                    font-size: 0;
                    img {
                        vertical-align: middle;
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
            }
        }
    }

</style>