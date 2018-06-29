<template>
    <!--人气单品部分-->
    <div class="popularItem">
        <router-link to="/list">
            <img src="http://img10.static.yhbimg.com/yhb-img01/2017/07/17/15/011b8689301097a3b8d820dd628df8003a.jpg?imageView2/2/w/640/h/200/q/90" alt="">
        </router-link>
        <div class="hot-single-goods-list">
            <ul>
                <li class="hot-single-goods" v-for="item in items">
                        <img :src="item.src" alt="">
                        <div class="goods-info">
                            <h3 class="price">{{item.money}}</h3>
                            <p class="view-num">{{item.people}}</p>
                            <p class="view-status">{{item.texts}}</p>
                        </div>
                </li>
            </ul>
        </div>

        <ul>
            <li v-for="(digimg,index) in digimgs" :class="getClass(index)">
                <div style="background-image: url(http://img11.static.yhbimg.com/yhb-img01/2017/05/25/16/01b43fa1d22531b1ddd8513580d0b4e68f.jpg?imageView2/2/w/640/h/26/q/60);" class="id-image"></div>
                <a @click="toList(index)" href="javascript:;"><img :src="digimg.src" alt="">
                    <a href="javascript:;">{{digimg.name}}</a ></a>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "popular-item",
        data(){
            return{
                items:[
                    {
                        src:"http://img11.static.yhbimg.com/goodsimg/2017/07/10/17/010fac193be98511178cf02ba0d0a8eca0.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥359.00',
                        people:'62人',
                        texts:'正在浏览'
                    },
                    {
                        src:"http://img13.static.yhbimg.com/goodsimg/2016/07/28/11/02653698a7dd102474a1ca29a8238252c0.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥765.00',
                        people:'184人',
                        texts:'正在浏览'
                    },
                    {
                        src:"http://img13.static.yhbimg.com/goodsimg/2017/07/04/10/02089c09b00ce09302ec951860a6e1b4c1.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥49.00',
                        people:'93人',
                        texts:'正在浏览'
                    },
                    {
                        src:"http://img12.static.yhbimg.com/goodsimg/2017/06/19/11/020bbdc92418db48272821980cb7f1b46e.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥138.00',
                        people:'45人',
                        texts:'正在浏览'
                    },
                    {
                        src:"http:////img11.static.yhbimg.com/goodsimg/2017/07/10/17/010fac193be98511178cf02ba0d0a8eca0.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥359.00',
                        people:'62人',
                        texts:'正在浏览'
                    },
                    {
                        src:"http://img10.static.yhbimg.com/goodsimg/2016/07/20/18/01aac2d59c52ebeff1894df8c974d652f9.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥249.00',
                        people:'85人',
                        texts:'正在浏览'
                    },
                    {
                        src:"http://img10.static.yhbimg.com/goodsimg/2017/06/05/11/014d9cba8e1636d7d990548418a037a2e8.jpg?imageMogr2/thumbnail/153x206/background/d2hpdGU=/position/center/quality/60",
                        money:'￥39.00',
                        people:'61人',
                        texts:'正在浏览'
                    }


                ],
                digimgs:[
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01a00e99aefb6466b2ee756852035eb95f.jpg?imageView2/3/w/640/h/200/q/60",
                        hrefs:"/list?from=datu&query=meizhuang"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/01c0f7fc0367f86a1e9b1d2d5d47daffab.jpg?imageView2/3/w/640/h/200/q/60",
                        hrefs:"/list?from=datu&query=lehuojiaju"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/08/16/17/011d25cc4122b7b3fc60181070c45ade86.jpg?imageView2/3/w/640/h/200/q/60",
                        hrefs:"/list?from=datu&query=shishangdapei"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/08/16/17/01aa32eb925ee5211fb457556b402423b7.jpg?imageView2/3/w/640/h/200/q/60",
                        hrefs:"/list?from=datu&query=chaoliushuma"
                    }
                ],
                money:'a'
            }
        },
        methods: {
            getClass(_index){
                return "digimg"+_index;
            },
            toList(_index){
                this.$store.commit("add",this.digimgs[_index]);
                this.$router.push(this.digimgs[_index].hrefs);
            }
        }
    }
</script>

<style lang="less" scoped>
    .popularItem {
        margin-bottom: -2px;
        z-index: 2;
        img {
            display: block;
            margin: 0 auto;
            max-width: 100%;
        }
        .hot-single-goods-list {
            width: 100%;
            height: 8.25rem;
            overflow-x: scroll;
            overflow-y: hidden;
            background-size: 100% 100%;
            ul {
                height: 8.25rem;
                padding: .625rem 0 .425rem .65rem;
                white-space: nowrap;
                .hot-single-goods {
                    display: inline-block;
                    height: 7.25rem;
                    width: 3.825rem;
                    margin-right: .65rem;
                    background: #fff;
                    border-radius: .125rem;
                    vertical-align: top;
                    .goods-pic {
                        height: 5.15rem;
                        width: 100%;
                    }
                    .goods-info {
                        position: relative;
                        height: 2.1rem;
                        width: 200%;
                        background: #fff;
                        text-align: center;
                        padding: .6rem 0 .5rem;
                        transform: scale(.5);
                        transform-origin: 0 0 0;
                    }
                    .price {
                        color: #444;
                        font-size: 1rem;
                        line-height: 1;
                    }
                    .view-num {
                        color: #b0b0b0;
                        font-size: .75rem;
                        margin-top: .5rem;
                        line-height: 1;
                    }
                    .view-status {
                        color: #b0b0b0;
                        font-size: .75rem;
                        margin-top: .35rem;
                        line-height: 1;
                    }
                }
            }
        }
        .id-image {
            height: 0.7rem;
            width: 100%;
            background-size: 100% 100%;
        }
    }
</style>