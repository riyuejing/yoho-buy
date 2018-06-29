<template>
    <div class="signup-wrap">
        <div class="signup-title">
            <span class="iconfont icon-fold" @click="goToLast"></span>
            <span>注册</span>
        </div>
        <div class="sign-form">
            <div>
                <span class="iconfont icon-shouji"></span>
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
                <span class="iconfont icon-jiantou-"></span>
                <input type="tel" placeholder="请输入手机号" v-model="username" class="tel-input" :checktel="checktel">
            </div>
            <div>
                <span class="iconfont icon-suo"></span>
                <input :type="typepwd" placeholder="请输入密码" v-model="password">
                <span class="iconfont iconpwd" :class="showpwdicon" @click="toShowPwd"></span>
            </div>
            <div>
                <span class="iconfont icon-kuajingzhifuicongeren"></span>
                <input type="text" v-model="friend_code" placeholder="好友潮口令 (非必填)">
            </div>
            <div style="margin-bottom:0.5rem;">
                <span class="iconfont icon-securityCode-b"></span>
                <input type="text" v-model="verifyCode" placeholder="请输入验证码">
                <div class="for-code" @click="changeImg">更改验证码</div>
            </div>
            <img :src="imgsrc">
            <button class="btn" type="button" @click="goToRegister">注册</button>
            <p class="yestext">
                <i class="iconfont icon-xuanze"></i>
                <span>我已阅读并同意遵守<a href="###" class="forred">Yoho!Buy有货服务条款</a></span>
            </p>
        </div>
    </div>


</template>

<script>
    export default {
        name: "signUp",
        data(){
            return {
                username:'',
                password:'',
                selected:'+86',
                verifyCode:'',
                friend_code:'',
                showpwd:false,
                showpwdicon:"icon-htmal5icon08",
                typepwd:"password",
                imgsrc:"/api/captcha",
                flag:"",
                isRegOk:''
            }

        },
        mounted(){

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
            goToRegister(){
                this.$http.post('/api/register',{
                    username:this.selected+this.username,
                    password:this.password,
                    verifyCode:this.verifyCode
                }).then(({data})=>{
                    this.isRegOk = data;
                    if( this.isRegOk.errorcode == 0){
                        //跳转前一页
                        //this.$router.push(-1);
                        //注册成功跳转到首页
                        this.$router.push('/index');
                    }
                })
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
            changeImg(){
                this.imgsrc = "/api/captcha?rt="+Math.random();
            }

        }
    }
</script>

<style lang="less" scoped>
    /*@import './iconfont.css';*/
    .signup-wrap{
        box-sizing: border-box;
        width: 100%;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        font-size: .6rem;
        margin-top:1.25rem;
        line-height: 1.25rem;
        .signup-title{
            width: 100%;
            height: 1.25rem;
            font-size: 1.1rem;
            text-align: center;
            color: #444;
            margin-bottom:2.5rem;
            .icon-fold{
                width: 1.25rem;
                font-size: 1.125rem;
                padding: 0;
                height: 1.25rem;
                color: #444;
                float:left;
            }
            span{
                font-size: .85rem;
                margin-top: .175rem;
            }
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
                    font-size: .65rem;
                    margin-right: .75rem;
                }
                .icon-jiantou-{
                    font-size:.3rem;
                    padding-right: 3px;
                    border-right: 1px solid;
                    color:#444;
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
                .iconpwd{
                    float: right;
                    font-size: 19px;
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
            .yestext{
                width: 100%;
                text-align: center;
                margin-top: .5rem;
                font-size: .4rem;
                color: #444;
                .forred{
                    font-size: .4rem;
                    color: #c00;
                    text-decoration: underline;
                }
                .icon-xuanze{

                }
            }

        }

    }

</style>