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
                <input type="tel" placeholder="请输入手机号" v-model="username" class="tel-input">
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
                path:this.$route.path
            }
        },
        methods:{
            goToLast(){
                this.$router.push({path:'/signIn'});
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
        width: 18.65rem;
        margin: 1.55rem auto 0;
        font-size: 1rem;
        line-height: 1.25rem;
        .signup-title{
            width: 100%;
            height: 1.25rem;
            font-size: 1.1rem;
            text-align: center;
            color: #444;
            margin-bottom:3.15rem;
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
                height: 2rem;
                border:0;
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

    }

</style>