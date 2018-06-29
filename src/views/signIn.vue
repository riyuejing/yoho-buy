<template>
    <div>
        <div v-if="$store.state.signInTag">
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
                        <select id="country" v-model="selected">
                            <option value="+61">澳大利亚</option>
                            <option value="+82">韩国</option>
                            <option value="+1">加拿大</option>
                            <option value="+60">马来西亚</option>
                            <option value="+1">美国</option>
                            <option value="+65">新加坡</option>
                            <option value="+81">日本</option>
                            <option value="+44">英国</option>
                            <option value="+86" selected>中国</option>
                            <option value="+853">中国澳门</option>
                            <option value="+886">中国台湾</option>
                            <option value="+852">中国香港</option>
                        </select>
                        <span class="iconfont icon-xiasanjiao"></span>
                        <input type="tel" placeholder="请输入手机号" v-model="username" class="tel-input" :checktel="checktel">
                    </div>
                    <div style="margin-bottom:0.5rem;">
                        <span class="iconfont icon-securityCode-b"></span>
                        <input type='text' v-model="verifyCode" placeholder="请输入验证码">
                        <div class="for-code" @click="changeImg">更改验证码</div>
                    </div>
                    <img :src="imgsrc">
                    <button class="btn" type="button" @click="okSignIn">登录</button>
                </div>
            </div>
            <ul class="other-way">
                <li @click="changeTag"><router-link to="/signIn/international">海外账号登录</router-link></li>
                <li class="sms" @click="changeTag2"><router-link to="/signIn/sms_signIn">账号密码登录</router-link></li>
                <li @click="forgetBox = !forgetBox">忘记密码?</li>
            </ul>
        </div>


        <div class="cover" v-if="isAlertBox">
            <div class="alertbox">
                <p class="text">Yoho!Family账号可登录YOHO!旗下所有应用（含：Yoho!Buy有货、Yoho!Now、mars、BLK、Yoho!Store）</p>
                <!--为什么直接赋值false不行呢??????-->
                <div class="btn" @click.stop="isAlertBox=!isAlertBox">好</div>
            </div>
        </div>
        <router-view></router-view>
        <!--<router-view v-if="international == true"></router-view>-->
        <!--<router-view v-if="sms == true"></router-view>-->
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
        name: "signIn",
        data(){
            return {
                isAlertBox:false,
                forgetBox:false,
                username:'',
                verifyCode:'',
                selected:'+86',
                path:this.$route.path,
                imgsrc:"/api/captcha",
                isSignInmsg:'',
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
                this.$router.go(-1);
            },
            okSignIn(){
                this.$http.post('/api/login',{
                    username:this.selected+this.username,
                    verifyCode:this.verifyCode
                }).then(({data})=>{
                    if(data.errorcode != 1){
                        this.$router.push('/index');
                    }
                    console.log(data);
                });

            },
            changeTag(){
                this.$store.state.signInTag = false;

            },
            changeTag2(){
                this.$store.state.signInTag = false;
            },
            changeImg(){
                this.imgsrc = "/api/captcha?rt="+Math.random();
            }
        }
    }
</script>

<style lang="less" scoped>
    @import './signUp/iconfont.css';
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
            margin-bottom: 1.55rem;
            #country{
                outline: none;
                font-weight: normal;
                min-height: 1.2em;
                padding: 0px 2px 1px;
                font-size: 14px;
            }
            .iconfont{
                font-size: .65rem;
                margin-right: .75rem;
            }
            .icon-xiasanjiao{
                font-size:.3rem;
                padding-right: 3px;
                border-right: 1px solid;
            }
            input{
                font-size: 14px;
                outline: none;
            }
            .for-code{
                padding: 0 .4rem;
                height: 1.25rem;
                line-height: 1.25rem;
                border-radius: .625rem;
                background-color: #b0b0b0;
                color: #fff;
                font-size: .55rem;
                float: right;
                text-align: center;
                outline: none;
                cursor: pointer;
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
            border:0;
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
        margin-top: .75rem;
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