<template>
    <div class="container">
        <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                <a @click="picToList">
                    <img style="width:100vw;" src="https://img11.static.yhbimg.com/yhb-img01/2018/06/21/13/019a1e958f08b001d26fa8fee149b44a49.jpg?imageView2/2/w/640/h/240/q/60" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                <a @click="picToList">
                    <img style="width:100vw;" src="https://img11.static.yhbimg.com/yhb-img01/2018/06/21/13/01524aa8f5604dc1a158878230ac6a6463.jpg?imageView2/2/w/640/h/240/q/60" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                <a @click="picToList">
                    <img style="width:100vw;" src="https://img10.static.yhbimg.com/yhb-img01/2018/06/21/13/013c903e90db2435edef16a87ea11a0310.jpg?imageView2/2/w/640/h/240/q/60" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                <a @click="picToList">
                    <img style="width:100vw;" src="https://img10.static.yhbimg.com/yhb-img01/2018/06/21/13/019136dee3d42f8aa4120dc20c8df67c32.jpg?imageView2/2/w/640/h/240/q/60" alt="">
                </a>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>


<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name:'lunbo',
        components:{
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: true,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        bulletClass: 'my-bullet',
                        bulletActiveClass: 'my-bullet-active',
                        clickable: true
                    },
                    paginationClickable: true,
                    // prevButton: '.swiper-button-prev',//上一张
                    // nextButton: '.swiper-button-next',//下一张
                    // scrollbar: '.swiper-scrollbar',//滚动条
                    mousewheelControl: true,
                    observeParents: true,
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    debugger: true,
                }
            }

        },
        methods:{
            picToList(){
                this.$router.push({
                    path:'/list',
                    query:{
                        from:'indexlunbo'
                    }
                })
            },

        }

    }
</script>

<style lang="less">
    //轮播图
    .container {
        position: relative;
        width: 100%;
        height: 9.1rem;
        max-height: 9.1rem;
        overflow: hidden;
        padding-left: 0;
        .swiper{
            position: relative;
            width: 100%;
            height: 9.1rem;
            .swiper-slide {
                a {
                    float: left;
                    width:100%;
                    height: 9.1rem;
                    text-decoration: none;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .swiper-pagination {
                position: absolute;
                bottom:0.7rem;
                left: 7.6rem;
                display: inline-block;
                padding: .17rem .1rem ;
                width: 3.8rem;
                line-height: 1.2;
                background: rgba(0,0,0,0.2);
                border-radius: 1.25rem;
                display: flex;
                flex-direction:row;
                justify-content: space-around;
                align-items:center;
                .my-bullet {
                    float: left;
                    display: inline-block;
                    width: 0.37rem;
                    height: 0.37rem;
                    border: 1px solid lightgrey;
                    border-radius: 50%;
                    background: transparent;
                }
                .my-bullet-active{
                    background: #ffffff;
                }

            }

        }
    }
</style>