<template>
    <div>
        <div class="signin-top">
            <div class="top-con">
                <div class="block1">
                    <span class="iconfont icon-fanhui" @click="goToLast"></span>
                    <router-link to="/signUp" class="tosignup">注册</router-link>
                </div>
                <p @click.stop="isAlertBox=!isAlertBox">Yoho!Family账号可登录Yoho!Buy有货?</p>
            </div>
        </div>
        <div class="sign-wrap">
            <div class="sign-form">
                <div>
                    <span class="iconfont icon-msnui-tel"></span>
                    <input type="tel" placeholder="请输入手机号/邮箱" v-model="username" class="tel-input" :checktel="checktel">
                </div>
                <div>
                    <span class="iconfont icon-mima"></span>
                    <input :type="typepwd" placeholder="请输入密码" v-model="password">
                    <span class="iconfont iconpwd" :class="showpwdicon" @click="toShowPwd"></span>
                </div>
                <button class="btn" type="button" @click="okSignIn">登录</button>
            </div>
        </div>
        <ul class="other-way">
            <li><router-link to="/signIn/international">海外账号登录</router-link></li>
            <li class="sms">
                <router-link to="/signIn/sms_signIn">账号密码登录</router-link>
            </li>
            <li @click="forgetBox = !forgetBox">忘记密码?</li>
        </ul>
        <div class="forget" v-show="forgetBox">
            <div class="cover" @click="forgetBox = !forgetBox"></div>
            <div class="bottom-btn">
                <span>邮箱找回</span>
                <span>手机找回</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sms",
        data(){
            return {
                showpwdicon:"icon-htmal5icon08",
                username:'',
                password:'',
                typepwd:"password",
                forgetBox:false,
                selected:'+86',
                yesloginres:{}
            }
        },
        computed:{
            checktel(){
                if((/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username))){
                    $('.btn').css("backgroundColor","#4D8893");
                }else{
                    $('.btn').css("backgroundColor","#b0b0b0");
                }
            }
        },
        methods:{
            goToLast(){
                this.$store.state.signInTag = true;
                this.$router.go(-1);

            },
            toShowPwd(){
                this.showpwd = !this.showpwd;
                if(this.showpwd == true){
                    this.showpwdicon = 'icon-htmal5icon09';
                    this.typepwd = 'text';
                    !this.showpwd;
                }else{
                    this.showpwdicon = 'icon-htmal5icon08';
                    this.typepwd = 'password';
                }
            },
            okSignIn(){
                this.$http.post('/api/login',{
                    username:this.selected+this.username,
                    password:this.password
                }).then(({data})=>{
                    this.yesloginres = data;
                    //console.log(this.yesloginres);
                    let obj = {
                        username: this.yesloginres.data.nickname,
                    //     userId: data.data._id,
                    };
                    // if(data.data.phoneNumber){
                    //     obj.nickname=data.data.phoneNumber;
                    // }
                    this.$store.commit('setStorage',obj);
                    if(this.yesloginres.errorcode == 0){
                        this.$router.push("/personalCenter");
                    }
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "./signUp/iconfont.css";
    .forget{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left:0;
        .bottom-btn{
            width: 100%;
            position:absolute;
            left:0;
            bottom:0;
            display: flex;
            span{
                width: 100%;
                height:2.5rem;
                flex:1;
                background-color: #fff;
                color:#444;
                font-size:14px;
                text-align: center;
                line-height: 2.5rem;
            }
            span:last-child{
                background-color: #000;
                color:#fff;
            }
        }
    }
    .iconpwd{
        float: right;
        font-size: 19px;
    }
    .signin-top{
        width: 100%;
        box-sizing: border-box;
        height: 7.25rem;
        padding: 0 1.875rem;
        background: url("http://img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290") no-repeat;
        background-size: cover;
        .top-con{
            width: 100%;
            height: 100%;
            border: 1px solid transparent;
            position: relative;
            .block1{
                margin-top:1.25rem;
                .icon-fanhui{
                    color:#fff;
                    font-size:1.25rem;
                    width:1.25rem;
                }
                .tosignup{
                    width: 2.75rem;
                    height: 1.25rem;
                    line-height: 1.25rem;
                    border-radius: .625rem;
                    border: 1px solid #fff;
                    color:#fff;
                    float:right;
                    background-color: transparent;
                    text-align: center;
                    font-size:14px;
                    padding: 0rem .2rem;
                    margin-top: -.1rem;
                }
            }
            p{
                position: absolute;
                bottom: .35rem;
                width: 100%;
                text-align: center;
                font-size:0.55rem;
                color:#fffefe;
            }

        }
    }
    .sign-wrap,.other-way{
        box-sizing: border-box;
        width: 100%;
        padding:0 1.875rem;
        margin-top: 1.5rem;
        font-size: 1rem;
        line-height: 1.25rem;
    }
    .sign-form{
        div{
            border-bottom: 1px solid #e0e0e0;
            height: 1.25rem;
            padding-bottom:5px;
            margin-bottom: 1.4rem;
            .iconfont{
                font-size: .65rem;
                margin-right: .75rem;
            }
            input{
                font-size: 14px;
                outline: none;
            }
        }
        button.btn{
            height: 1.75rem;
            border-radius: .1rem;
            background-color: #b0b0b0;
            margin-top: .2rem;
            font-size: .8rem;
            color: #fff;
            width: 100%;
            line-height: 1.75rem;
            outline: none;
            text-align: center;
        }
    }
    .cover{
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        .alertbox{
            position: fixed;
            left: 50%;
            top: 50%;
            margin: -5.55rem -8rem;
            background: #fcfcfc;
            width: 16rem;
            height:11.1rem;
            z-index: 333;
            .text{
                font-size: 15px;
                line-height: 1.3;
                text-align: center;
                margin: 1.7rem 1rem 1.2rem;
            }
            .btn{
                position: absolute;
                bottom: 0;
                width: 100%;
                border-top: 1px solid #EDEEED;
                height:2.2rem;
                text-align: center;
                color: #4a90e2;
                line-height: 2.2rem;
            }

        }
    }
    .other-way{
        display: flex;
        margin-top:1.1rem;
        li{
            font-size:12px;
            color:#000;
            flex: 1;
        }
        li:nth-child(2){
            text-align:center;
        }
        li:last-child{
            text-align:right;
        }
    }

</style>