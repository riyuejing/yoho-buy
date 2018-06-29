<template>
    <div>
        <a href="/search">
            <div class="searchbar">
                <div class="inputwrap">
                    <i class="iconfont icon-icon-test"></i>
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
                        <li class="item-name" v-for="name in sub.secondClass" @click="toList(name)">{{name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <index-bottom></index-bottom>
    </div>
</template>

<script>
    import Bus from '../../components/common/bus'
    import IndexBottom from '../../components/common/footerHome'
    export default {
        name: "cate",
        components:{
            IndexBottom
        },
        data(){
            return{
                data:[],
                forclass:"ul0",
                theQuery:''
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
                //判断是否有下级
                if(item.secondClass == ''){
                    setInterval(()=>{
                        Bus.$emit("primaryClass",item.primaryClass);
                    },1000);
                    this.theQuery = item.primaryClass;
                    this.$router.push({
                        path:"/list",
                        query: {
                            from: "cate",
                            query: item.primaryClass
                        }
                    });
                }
            },
            getClass(index1){
                return "ul"+index1;
            },
            toList(_name){
                setInterval(()=>{
                    Bus.$emit("secondclass",_name);
                },500)
                this.theQuery = _name;
                // console.log(this.theQuery);
                this.$router.push({
                    path:"/list",
                    query: {
                        from: "cate",
                        query: _name
                    }
                })
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
    /*@import '../search/iconfont.css';*/
    .lwrap{
        position: absolute;
        left: 0;
        top:2.519rem;
        bottom: 0;
        overflow: hidden;
        width: 8.4375rem;
        ul{
            height: 100%;
            background-color: #F7F8F7;
            li:first-child{
                background-color: #fff;
            }
        }
    }
    li{
        box-sizing: border-box;
        width: 100%;
        height: 2.607rem;
        line-height: 2.607rem;
        padding: 0 .8rem;
        background-color: #F7F8F7;
        font-size: 14px;
    }
    .rwrap{
        position: absolute;
        right: 0;
        top:2.519rem;
        bottom: 0;
        width: calc(100% - 8.4375rem);
        overflow: hidden;
        .item-name{
            background-color: #fff;
            border-bottom: 1px solid #e6e6e6;
        }
    }
    .searchbar{
        overflow: hidden;
        width: 100%;
        padding: .325rem .5rem;
        height: 2.519rem;
        box-sizing: border-box;
        background-color: #f8f8f8;
        .inputwrap{
            position: relative;
            line-height: 2.519rem;
            overflow: hidden;
            width: 100%;
            height: 100%;
            color:#999;
            i{
                position: absolute;
                top:0;
                left:  .8rem;
                height: 1.769rem;
                line-height: 1.769rem;
                font-size: 20px;
                z-index: 22;
                margin-right:5px;
            }
            input{
                position: absolute;
                top:0;
                left:0;
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