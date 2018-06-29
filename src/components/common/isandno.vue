<template>
    <div>
        <div class="confrimdelete" v-if="isBox">
            <div class="box" @click="isBox = false">
                <div class="boxtop">您确定要从购物车中删除么</div>
                <div class="boxbottom">
                    <p @click="isBox = false">取消</p>
                    <p @click="delGood">确定</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "isandno",
        data(){
            return{
                isBox:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .confrimdelete{
        width:100%;
        height:100%;
        z-index: 999;
        position: absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.5);
    .box{
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-3.15rem;
        margin-left:-6.75rem;
        width:13.5rem;
        height:6.3rem;
        border-radius: .5rem;
        background-color: rgba(255,255,255,.84);
        font-size: 16px;
    .boxtop{
        text-align: center;
        line-height: 4.1rem;
        color:#000;
        height: 4.1rem;
        border-bottom: 1px solid #ccc;
    }
    .boxbottom{
        height:2.2rem;
        width:100%;
    p{
        text-align: center;
        float:left;
        width:49%;
        height:2.2rem;
        line-height: 2.2rem;
    }
    p:first-child{
        border-right:1px solid #ccc;
    }
    p:last-child{
        color: #d0021b;
    }
    }

    }
    }
</style>