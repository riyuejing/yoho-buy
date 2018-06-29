<template>
    <div>
        <div class="coupons-top">
            <span class="iconfont icon-back back" @click="gotoLast"></span>
            <h2>优惠券</h2>
        </div>
        <ul class="filter-box">
            <li class="filter-btn-box" :class="{hue:changeHue == index}" v-for="(item,index) in items" @click="change(index)">
                <span class="filter-btn">{{item.name}}</span>
            </li>
        </ul>

        <div class="use-situation">
            <!--未使用-->
            <div class="no-use" v-if="first">
                <!--输入框-->
                <div class="no-input">
                    <input type="text" placeholder="请输入优惠券码"/>
                    <button class="exchange-btn">兑换</button>
                </div>
                <!--内容-->
                <div class="cimg">
                    <i class="iconfont icon-youhuiquan">
                    </i>
                    <p class="couptext">暂无优惠券</p>
                </div>
            </div>
            <!--使用-->
            <div class="used" v-else-if="second">
                <!--内容-->
                <div class="cimg">
                    <i class="iconfont icon-youhuiquan">
                    </i>
                    <p class="couptext">暂无优惠券</p>
                </div>
            </div>
            <!--已失效-->
            <div class="failure" v-else-if="third">
                <!--内容-->
                <div class="cimg">
                    <i class="iconfont icon-youhuiquan">
                    </i>
                    <p class="couptext">暂无优惠券</p>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "coupons",
        data(){
            return {
                items:[
                    {
                        name:'未使用'
                    },
                    {
                        name:'已使用'
                    },
                    {
                        name:'已失效'
                    }
                ],
                first:true,
                second:false,
                third:false,
                changeHue:0
            }
        },
        methods:{
            gotoLast(){
                this.$router.go(-1);
            },
            change(index){
                console.log(index)
                if(index==0){
                    this.first=true;
                    this.second=false;
                    this.third=false;
                    this.changeHue = index;
                }else if(index==1){
                    this.first=false;
                    this.second=true;
                    this.third=false;
                    this.changeHue = index;
                }else if(index==2){
                    this.first=false;
                    this.second=false;
                    this.third=true;
                    this.changeHue = index;
                }
                console.log(index);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../assets/fonts/iconfont.css";
    .hue {
        color: orangered;
    }
    /*头部*/
    .iconfont{
        color: white;
    }
    .coupons-top {
        z-index: 6;
        box-sizing: border-box;
        position: fixed;
        top:0;
        left:0;
        width:100vw;
        height: 2.625rem;
        line-height: 2.625rem;
        background-color:#4f4138;
        background-image: linear-gradient(#323232,#414141);
        .back,.iconviewlist{
            position: absolute;
            top: 0;
            display: block;
            width: 2.625rem;
            height: 2.625rem;
            line-height: 2.625rem;
            font-size: 27px;
            font-weight: bold;
            text-align: center;
            vertical-align: baseline;
        }
        h2{
            font-size: 1.05rem;
            font-weight: 400;
            text-align: center;
            color: white;
        }
    }
    /*tab切换*/
    .filter-box {
        overflow: hidden;
        width: 100%;
        height: 2rem;
        display: flex;
        padding: .15rem 0;
        box-shadow: 0 0 0.4rem 0 #eee;
        background-color: #fff;
        position:fixed;
        top: 2.65rem;
        left: 0;
        z-index: 3;
        .filter-btn-box {
            flex:1;
            line-height: 1.5rem;
            text-align: center;
            border-right: 1px solid #e0e0e0;
            .filter-btn{
                font-size: .7rem;
            }
        }
    }
    .use-situation {
        overflow: hidden;
        .no-use {
            position: fixed;
            top: 5rem;
            left: 0;
            z-index: 2;
            .no-input {
                overflow: hidden;
                padding: .3rem 1.33rem;
                input{
                    outline: none;
                    float: left;
                    width: 12rem;
                    height: 1.5rem;
                    margin-right: .3rem;
                    padding: 0 .49rem;
                    background-color: #f0f0f0;
                    border-radius: .1rem;
                    border: none;
                }
                .exchange-btn {
                    outline: none;
                    float: right;
                    width: 2.8rem;
                    height: 1.5rem;
                    border-radius: .1rem;
                    font-size: .7rem;
                    color: #fff;
                    background-color: #b0b0b0;
                }
            }
        }
        .cimg {
            background: rgb(240,240,240);
            position: relative;
            width: 100%;
            height: 45rem;
            text-align: center;
            padding: 7rem 0;
            .iconfont {
                font-size: 4rem;
                color: rgb(175,175,175);
            }
            .couptext {
                margin-top: 0.5rem;
                font-size: .7rem;
                color: #b0b0b0;
            }
        }
    }

    .used,.failure  {
        padding-top: 4rem;
    }
</style>