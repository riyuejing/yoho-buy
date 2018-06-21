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
                    <input type="tel" placeholder="请输入手机号/邮箱" v-model="username" class="tel-input">
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
            <li>忘记密码?</li>
        </ul>
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
                typepwd:"password"
            }
        },
        methods:{
            goToLast(){
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

                })
            },
        }
    }
</script>

<style lang="less" scoped>
    @import "./signUp/iconfont.css";
    .iconpwd{
        float: right;
        font-size: 19px;
    }
    .signin-top{
        width: 100%;
        height:8.95rem;
        background: url("http://img11.static.yhbimg.com/yhb-img01/2018/03/26/10/01cf2c685c5d7ddbb21b7c7b961da77454.jpg?imageView2/2/w/750/h/290") no-repeat;
        background-size: cover;
        .top-con{
            width: 78%;
            height: 100%;
            margin: 0 auto;
            position: relative;
            border: 1px solid transparent;
            .block1{
                margin-top:1.25rem;
                .icon-fanhui{
                    color:#fff;
                    font-size:1.25rem;
                }
                .tosignup{
                    border: 1px solid #fff;
                    color:#fff;
                    float:right;
                    width: 2.75rem;
                    height: 1.25rem;
                    line-height:1.25rem;
                    background-color: transparent;
                    text-align: center;
                    border-radius: .8rem;
                    font-size:14px;
                    padding: 0rem .2rem;
                    margin-top: -.1rem;
                }
            }
            p{
                position: absolute;
                bottom: .45rem;
                width: 100%;
                text-align: center;
                font-size:0.55rem;
                color:#fffefe;
            }

        }
    }
    .sign-wrap,.other-way{
        width: 18.65rem;
        margin: 1.55rem auto 0;
        font-size: 1rem;
        line-height: 1.25rem;
    }
    .sign-form{
        div{
            border-bottom: 1px solid #e0e0e0;
            height: 1.25rem;
            padding-bottom:5px;
            margin-bottom: 1.4rem;
            #country{
                outline: none;
                font-weight: normal;
                min-height: 1.2em;
                padding: 0px 2px 1px;
                font-size: 14px;
            }
            .iconfont{
                margin-right: 0.75rem;
            }
            .icon-xiasanjiao{
                font-size:13px;
                padding-right: 3px;
                border-right: 1px solid;
            }
            input{
                font-size: 14px;
                outline: none;
            }
            .for-code{
                padding: .1rem .4rem;
                height: 1.45rem;
                line-height: 1.45rem;
                border-radius: .625rem;
                background-color: #b0b0b0;
                color: #fff;
                font-size: .55rem;
                text-align: center;
                float: right;
                margin-top:-.3rem;
                outline: none;
                cursor: pointer;
            }
        }
        button.btn{
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            border-radius: .2rem;
            margin-top: 1rem;
            color: #fff;
            outline: none;
            text-align: center;
            font-size: 1rem;
            background-color: #b0b0b0;
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