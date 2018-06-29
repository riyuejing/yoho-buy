<template>
    <div class="thirdFloor">
        <ul class="hot-brands">
            <li class="brand" v-for="(popular,index) in populars" :class="getClass(index)">
                    <div class="brand-logo" @click="toList(index)">
                        <img :src="popular.src" alt="">
                    </div>
            </li>
            <li class="more">
                <a href="/">
                    <div class="brand-logo">
                        <img src="http://img10.static.yhbimg.com/yhb-img01/2017/11/22/14/01fc7836ecc476bc3fdd5722626cd5eb56.jpg?imageView2/2/w/320/h/172/q/60" alt="">
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "third-floor",
        data(){
            return{
                populars:[
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/11/30/13/01c708717ebd268f9d29aaf3f365ce98d3.jpg?imageView2/2/w/158/h/174/q/60",
                        hrefs:"/tois?from=index&query=tois"
                    },
                    {
                        src: "http://img11.static.yhbimg.com/yhb-img01/2017/11/30/13/01111dabc82a71f531f67075f2f0b5a1a2.jpg?imageView2/2/w/158/h/174/q/60",
                        hrefs:"/hotbrand"
                    },
                    {
                        src:"http://img11.static.yhbimg.com/yhb-img01/2017/11/30/13/01dadc2b40189876352e23aaf3660eb872.jpg?imageView2/2/w/158/h/174/q/60",
                        hrefs:"/bns"
                    },
                    {
                        src:"http://img10.static.yhbimg.com/yhb-img01/2017/11/30/13/01734fdb628d7aa7f252dbfd7759504d20.jpg?imageView2/2/w/158/h/174/q/60",
                        toRoute:'goods/new-goods',hrefs:"/lifestyle-new?from=cate&query=your"
                    },
                    {
                        src: "http://img11.static.yhbimg.com/yhb-img01/2017/11/30/13/0137124b441965e8b44568fcf04ec204eb.jpg?imageView2/2/w/158/h/174/q/60",
                        toRoute:'goods/new-goods',
                        hrefs:"/lifestyle-new?from=cate&query=lg"
                    },
                    {
                        src: "http://img10.static.yhbimg.com/yhb-img01/2017/11/30/13/016bcc4898e49963668e267faef37c895d.jpg?imageView2/2/w/158/h/174/q/60",
                        toRoute:'goods/new-goods',hrefs:"/lifestyle-new?from=cate&query=qeedigi"
                    }
                ]
            }
        },
        methods:{
            getClass(_index){
                return "popular"+_index;
            },
            toList(_index){
                this.$store.commit("add",this.populars[_index]);
                this.$router.push(this.populars[_index].hrefs);
            }
        }
    }
</script>

<style lang="less" scoped>
    .hot-brands {
        overflow: hidden;
        // border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;

        background: #fff;
        .brand {
            float: left;
            background-color: #e0e0e0;
            width: 25%;
            height: 4.6875rem;
            overflow: hidden;
            padding: 1px 1px 0 0;
            box-sizing: border-box;
            &:nth-child(4) {
                padding-right: 0;
            }
        }
        .more {
            float: left;
            width: 50%;
            height: 4.6875rem;
            overflow: hidden;
        }
        a {
            display: block;
            text-decoration: none;
            height: 100%;
        }
        .brand-logo {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            /*font-size: 0;*/
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>