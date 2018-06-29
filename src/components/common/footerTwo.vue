<template>
    <div class="footertwo">
        <p class="userRelevant">
            <span>Hi,</span>
            <span><a class="user-name" href="/personalCenter">{{username}}</a></span>
            <span class="sep-line" style="color: #e0e0e0; margin: 0 .85rem;">|</span>
            <span @click="signOut"><a href="javascript:void(0)">退出</a></span>
            <span class="back-to-top" style="position: absolute; right: 1rem"><scorll-to-top></scorll-to-top></span>
        </p>
        <p class="address">CopyRight©2007-2018 南京新与力文化传播有限公司</p>
    </div>
</template>

<script>
    import ScorllToTop from './scrollToTop'
    export default {
        name: "footer-two",
        data(){
            return{
                username:''
            }
        },
        mounted(){
            this.username = localStorage.username;
            //console.log(this.username);
        },
        components:{
            ScorllToTop
        },
        methods:{
            signOut(){
                //登出
                this.$http.get('api/logout');
                this.$router.push('/signIn');
            }
        }
    }
</script>

<style lang="less" scoped>
    .footertwo {
        width: 100%;
        background-color: #fff;
        font-size: 0.6rem;
        margin-bottom: 2.6rem;
        .userRelevant {
            position: relative;
            padding: 0 .85rem;
            height: 3rem;
            line-height: 3rem;
            span {
                display: inline-block;
                overflow: hidden;
                .user-name {
                    display: inline-block;
                    max-width: 5rem;
                    text-decoration: none;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

        }
        .address {
            height: 60px;
            background-color: #eee;
            color: #666;
            text-align: center;
            line-height: 60px;
            font-size: .6rem;
        }
    }
</style>