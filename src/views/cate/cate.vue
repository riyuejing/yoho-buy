<template>
    <div>
        <a href="/search">
            <div class="searchbar">
                <div class="inputwrap">
                    <i class="iconfont icon-suosou"></i>
                    <input type="text" placeholder="搜索商品">
                </div>

            </div>
        </a>
        <div>
            <div class="lwrap" ref="lcont">
                <ul>
                    <li class="forcolor" v-for="(item,index) in data" @click="toChoose(item,index)" :id="getClass(index)">
                        <span>{{item.primaryClass}}</span>
                    </li>
                </ul>
            </div>
            <div class="rwrap" ref="rcont">
                <div>
                    <ul v-for="(sub,index) in data" v-if="forclass==getClass(index)">
                        <li class="item-name" v-for="name in sub.secondClass">{{name}}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "cate",
        data(){
            return{
                data:[],
                forclass:"ul0"
            }

        },
        computed:{

        },
        methods:{
            toChoose(item,_index){
                //样式
                $(".forcolor").css("background-color","#F7F8F7");
                $("#ul"+_index).css("background-color","#fff");
                //切换下级内容
                this.forclass = "ul"+_index;
            },
            getClass(index1){
                return "ul"+index1;
            }
        },
        created(){
            this.$http.get('/api/list').then(({data})=>{
                this.data = data;
            })
        },
        filters:{

        }
    }
</script>

<style lang="less" scoped>
    @import './iconfont.css';
    .lwrap{
        position: absolute;
        left: 0;
        top:3.14875rem;
        bottom: 3.661875rem;
        overflow: hidden;
        width: 10.546875rem;
        ul{
            height: 100%;
            background-color: #F7F8F7;
        }
    }
    li{
        box-sizing: border-box;
        width: 100%;
        height: 3.2588125rem;
        line-height: 3.2588125rem;
        padding: 0 1.171875rem;
        background-color: #F7F8F7;
        font-size: 14px;
    }
    .rwrap{
        position: absolute;
        right: 0;
        top:3.14875rem;
        bottom: 3.661875rem;
        width: calc(100% - 10.546875rem);
        overflow: hidden;
        .item-name{
            background-color: #fff;
            border-bottom: 1px solid #e6e6e6;
        }
    }
    .searchbar{
        overflow: hidden;
        width: 100%;
        height: 3.14875rem;
        background-color: #f8f8f8;
        .inputwrap{
            position: relative;
            line-height: 2.1963125rem;
            overflow: hidden;
            width: 21.972625rem;
            height: 2.1963125rem;
            margin:0.4760625rem auto;
            color:#999;
            i{
                text-align: center;
                position: absolute;
                top:0;
                left: 0;
                font-size: 20px;
                width: 2.417rem;
            }
            input{
                outline: none;
                border: 0;
                color: #999;
                box-sizing: border-box;
                font-size: 12px;
                height: 100%;
                width: 100%;
                padding-left: 2rem;
                border-radius: 1.5rem;

            }
        }
    }

</style>