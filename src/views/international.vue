<template>
    <div class="signup-wrap">
        <div class="signup-title">
            <span class="iconfont icon-fanhui" @click="goToLast"></span>
            <span>海外账号登录</span>
        </div>
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
            <div>
                <span class="iconfont icon-mima"></span>
                <input :type="typepwd" placeholder="请输入密码" v-model="password">
                <span class="iconfont iconpwd" :class="showpwdicon" @click="toShowPwd"></span>
            </div>
            <button class="btn" type="button">登录</button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "international",
        props:['signIn'],
        data(){
            return {
                username:'',
                password:'',
                selected:'+86',
                showpwd:false,
                showpwdicon:"icon-htmal5icon08",
                typepwd:"password",
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
            }
        }
    }
</script>

<style lang="less" scoped>
    @import './signUp/iconfont.css';
    .signup-wrap{
        width: 100%;
        box-sizing: border-box;
        height: 7.25rem;
        padding: 0 1.875rem;
        margin-top: 1.25rem;
        font-size: 1rem;
        line-height: 1.25rem;
        .signup-title{
            width: 100%;
            height: 1.25rem;
            font-size: 0.85rem;
            text-align: center;
            color: #444;
            margin-bottom:2.5rem;
            .icon-fanhui{
                float:left;
                font-size: 1.125rem;
            }
        }
        .sign-form{
            div{
                border-bottom: 1px solid #e0e0e0;
                height: 1.25rem;
                padding-bottom:5px;
                margin-bottom: 1.4rem;
                font-size:0.85rem;
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
                .iconpwd{
                    float: right;
                    font-size: 19px;
                }
            }
            button.btn{
                width: 100%;
                height: 1.75rem;
                border:0;
                line-height: 1.75rem;
                border-radius: .1rem;
                margin-top: 1rem;
                color: #fff;
                outline: none;
                text-align: center;
                font-size: .8rem;
                background-color: #b0b0b0;
            }
        }

    }

</style>