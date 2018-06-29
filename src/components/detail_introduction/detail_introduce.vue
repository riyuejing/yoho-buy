<template>
    <div class="wrap">
        <!-- 第一层 -->
        <div>
            <!-- 顶部 -->
            <title-top title="详情页"></title-top>
            <!-- 轮播图 -->
            <div class="container">
                <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
                    <!-- 这部分放你要渲染的那些内容 -->  
                    <swiper-slide class="swiper-slide" data-swiper-autoplay="3000">
                        <a @click="shadowchange()">
                            <img v-if="goodslist.goodsImgs"  v-for="item in goodslist.goodsImgs"    :src="item" alt=""   :key="goodslist.id">
                        </a>
                    </swiper-slide>
                    <!-- 这是轮播的小圆点-->
                    <div :class="swiperPagination" slot="pagination"></div>
                </swiper>
            </div>
            <!-- 商品名称 -->
            <div class="goods-name">
                <h1 class="name">
                    {{goodslist.goodsName}}
                </h1>
            </div>
            <!-- 价格 -->
            <div class="price-data">
                <h2 class="current-price" v-if="goodslist.goodsPrice">¥{{goodslist.goodsPrice.currentPrice}}</h2>
                <h2 class="previous-price" v-if="goodslist.privousPrice">{{goodslist.privousPrice}}</h2>
            </div>
            <!-- 卡 -->
            <ul class="price-data card">
                <div class="card-details">
                    <li>
                        <span class="gold-card"></span>
                        <span>¥121.60</span>
                    </li>
                    <li>
                        <span class="silver-card"></span>
                        <span>¥111.60</span>
                    </li>
                    <li>
                        <span class="platinum-card"></span>
                        <span>¥100.60</span>
                    </li>
                </div>
            </ul>
            <!-- 优惠活动 -->
            <div class="good-discount  price-data">
                <h2 class="good-discount-details">
                    <span class="promotion-icon">促</span>
                    全场任意消费加5元换购YOHO!当期热销新刊
                    <span class="down-arrow"></span>
                </h2>
            </div>
        </div>
        <!-- 第二层 -->
        <div class="feedback">
            <!-- 头 -->
            <div class="nav">
                <span class="nav-left" v-if="goodslist.comments"  v-show="comments"  @click="commentactive">商品评价
                    （{{goodslist.comments.count}}）</span>
                <span class="nav-left" v-if="goodslist.comments" v-show="comment" @click="commentactive()"  style="color:black" >商品评价（{{goodslist.comments.count}}）</span>
                <span class="nav-right" @click="active()"  v-if="normalproblem" >常见问题</span>
                 <span class="nav-right" @click="active()" v-if="normalproblems" style="color:black" >常见问题</span>
            </div>
            <!-- 商品评价页面 -->
            <div class="commentPage" v-if="commentPageChange">
                <div>
                    <p>
                        <span class="username" >1515***5151</span>
                        <span class="goods-spec" >购买了白色</span>
                    </p>
                    <p class="detail-content" >
                        6666
                    </p>
                    <p class="time" >
                        <span class="comment-time" >2018-06-18  08:35:09</span>
                    </p>
                </div>
                <!-- 查看更多 -->
                <div class="learnmore">
                    <a href="###">
                        <span>查看更多</span>
                        <i class="icon-keyboard_arrow_right iconfont icon-icon"></i>
                    </a>
                </div>
            </div>
            <!-- 常见问题 -->
            <div class="question-wrap">
                <div class="question">
                    <!-- 问题一 -->
                    <div class="question-detail">
                        <i class="icon-question"></i>
                        <span>商品都是正品吗？</span>
                    </div>
                    <div class="answer-detail">
                        <i class="icon-check_circle"></i>
                        <span>商品都是正品</span>
                    </div>
                </div>
            </div>
            <!-- 查看更多 -->
             <div class="learnmore">
                    <a href="###">
                        <span>查看更多</span>
                        <i class="icon-keyboard_arrow_right icon-icon iconfont"></i>
                    </a>
                </div>
        </div>
        <!-- 第三层 进入店铺 -->
        <div class="enter-store-wrap">
            <div class="enter-store">
                <a href="###">
                    <img  class="store-pic"  src="https://img10.static.yhbimg.com/yhb-img01/2018/05/10/11/01b0f2d8059c30f31c753505ba94fa4549.jpg?imageMogr2/thumbnail/47x47/extent/47x47/background/d2hpdGU=/position/center/quality/80" alt="">
                </a>
                <a href="/bns" class="name">
                    HOT TOYS
                </a>
                <a href="/bns" class="store-link">
                    进入店铺
                    <i class="icon-keyboard_arrow_right"></i>
                </a>
            </div>
        </div>
        <!-- 第四层 商品信息 -->
        <div>
            <div class="goods-desc">
            <!-- 头 -->
                <h2>
                        商品详情
                        <span>PRODUCT INFO</span>
                </h2>
                <!--商品详情  -->
                <div class="detail-table">
                    <span class="column" v-if="goodslist.goodsInfo">编号：{{goodslist.goodsInfo.attr[0]}}</span>
                    <span class="color" v-if="goodslist.goodsInfo">颜色：{{goodslist.goodsInfo.attr[1]}}</span>
                    <span class="gender" v-if="goodslist.goodsInfo">性别：{{goodslist.goodsInfo.attr[2]}}</span> 
                </div>
                <div class="element">
                    <span   v-if="goodslist.goodsInfo"  >{{goodslist.goodsInfo.text}}</span>
               </div>
            </div>
        </div>
        <!-- 第五层 尺码信息 -->
        <!-- <div>
            <div> -->
            <!-- 头 -->
                <!-- <h2>
                        尺码信息
                        <span>size info</span>
                </h2> -->
                <!--商品详情  -->
                <!-- <div>
                    <span>吊牌尺码</span>
                    <span>F</span>
                    <span>F</span>
                    <span>25ML*10</span>
                </div>
            </div>
        </div> -->
        <!-- 第六层 -->
        <div>
            <div   class="goods-desc goods-dtl">
            <!-- 头 -->
                <h2 >
                        商品详情
                        <span>DETAILS</span>
                </h2>
                <!--商品详情  -->
                <div class="detail">
                     <span style="color:#ff0000" class="notice">温馨提示：我们不接受包装盒已被开封的商品的退换货（商品外包装盒上的透明封装胶带已被撕开同样视为开封），请您谅解！</span>
                    <!-- <span>包装更新</span> -->
                </div>
                <div class="showpicture">
                <!-- 商品图片 -->
                <img   :src="goodslist.goodsDetails" alt="" style="width:17.31rem
                "></div>
            </div>
        </div>
        <!-- 第七层 店铺推荐-->
        <div>
            <div>
                <!-- 头 -->
                <!-- <p>店铺推荐</p> -->
                <!-- 产品一 -->
                <div>
                    <a>
                        <img src="" alt="">
                        <p></p>
                        <p>
                            <!-- <span>¥69.00</span>
                            <span>¥180.00</span> -->
                        </p>
                    </a>
                </div>
                <!-- 产品二 -->
                <div>
                    <a>
                        <img src="" alt="">
                        <p></p>
                        <p>
                            <!-- <span>¥69.00</span>
                            <span>¥180.00</span> -->
                        </p>
                    </a>
                </div>
                <!-- 产品三 -->
                <div>
                    <a>
                        <img src="" alt="">
                        <p></p>
                        <p>
                            <!-- <span>¥69.00</span>
                            <span>¥180.00</span> -->
                        </p>
                    </a>
                </div>
                <!-- 展开推荐 -->
                <div>
                    <span></span>
                    <i></i>
                </div>
                <!-- 展开推荐后的关键字 -->
                <div>
                    <!-- 关键字 -->
                    <span></span>
                    <!-- 收起推荐 -->
                    <div>
                        <span></span>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第七层 登录注册返回顶部 -->
        <!-- 其他：点击轮播图页面后产品展示 -->
        <div class="shadows" v-if="shadow">
            <img v-for="item in goodslist.goodsImgs"    :src="item"  alt="" @click="shadowchange()" style="width:18.8rem">
        </div>
        <!-- 其他：返回顶部按钮 -->
        <div class="return-top" v-if="returnTop" ref="back" @click="backTop()">
        </div>
        <!-- 底部 -->
        <div class="cart-bar">
            <a class="bottom-cart">
                <i class="icon-cart icon-gouwuche iconfont " ></i>
                <p @click="toCart">购物车</p>
                <p class="circle" v-if="showCircle" >{{amount}}</p>
            </a>
            <a href="/bns">
                <i class="icon-home2 icon-index iconfont"></i>
                <p>品牌商铺</p>
            </a>
            <a v-if="loveheart">
                <i class="icon-favorite icon-shoucang  iconfont" @click="favorite" ref="favorite"></i>
                <p>收藏</p>
            </a>
            <a v-if="love">
                <i class="icon-favorite-another icon-favorite icon-shoucang  iconfont" @click="favorite" ref="favorite"   style="color:red" ></i>
                <p>收藏</p>
            </a>
            <a class="add-cart" @click="getGoodsMsg">
               <span class="enter">加入购物车</span>  
            </a>
        </div>
        <!--弹出选择页面-->
        <div class="choose" v-if="chooseAgain">
            <div class="con">
                <div class="p1">
                    <img :src="goodslist.goodsImgs[0]" :alt="goodslist.goodsName">
                    <div>
                        <p>{{goodslist.goodsPrice.currentPrice | price}}</p>
                        <p v-show="pleChCo">请选择颜色、尺码</p>
                        <p v-show="yixuan">已选:{{keycolor}}、{{keysize}}</p>
                    </div>
                    <p class="circle" @click="chooseAgain =!chooseAgain">×</p>
                </div>
                <div class="p2">
                    <p class="left">颜色</p>
                    <!--r-test2 选中样式-->
                    <ul class="r-ul">
                        <li class="r-test2" :class="{'r-test':iscur===index}" v-for="(item,index) in
                            goodslist.goodsAttr.color" @click="tabclick(item,index)">{{item}}</li>
                    </ul>
                </div>
                <div class="p3">
                    <p class="left">尺码</p>
                    <!--r-test2 选中样式-->
                    <ul class="r-ul">
                        <li class="r-test2" :class="{'r-test':iscur2===index}" v-for="(item,index) in
                            goodslist.goodsAttr.size" @click="tabclick2(item,index)">{{item}}</li>
                    </ul>
                </div>
                <div class="p4">
                    <p class="left">数量</p>
                    <div class="likebtn">
                        <!--@click="changeQuantity(item,-1,index)" -->
                        <span class="dec" @click="changecount(-1)">-</span>
                        <!--:value="item.count"-->
                        <input type="text" disabled :value="changenum"/>
                        <!--@click="changeQuantity(item,1)"-->
                        <span  class="add" @click="changecount(1)">+</span>
                    </div>
                </div>
                <!--底部按钮-->
                <div class="btn-wrap">
                    <button class="buynow" @click="showIns">立即购买</button>
                    <button class="addCarts" @click="addcarts">加入购物车</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
// import swiperVue from '../common/lunbo.vue'
import {mapState} from 'vuex'
import TitleTop from "../common/titleTop";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import footerVue from "../common/footer.vue";
export default {
  name: "detail_introduce",
  components: {
    swiper,
    swiperSlide,
    TitleTop
  },
  data() {
    return {
      //轮播部分
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        // autoplay: true,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          //   type:"custom",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
          clickable: true,
          hideOnClick: false
        },
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',//上一张
        // nextButton: '.swiper-button-next',//下一张
        // scrollbar: '.swiper-scrollbar',//滚动条
        // pagination:false,
        mousewheelControl: true,
        observeParents: true,
        oberser: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },
        chooseAgain:false,
        pleChCo:true,
        yixuan:false,
        keycolor:'',
        keysize:'',
        iscur:0,
        iscur2:0,
        changenum:1,
        //
      goodslist: {},
      swiperPagination: false,
      commentPage: true,
      returnTop: false,
      shadow: false,
      //panel: false,
      amounts: 1,
      love: false,
      loveheart: true,
      normalproblem: false,
      normalproblems: true,
      comments: true,
      comment: false,
      count: "",
      amount: 0,
      showCircles: false,
      color:false,
      colors:true,
      size:false,
      sizes:true,
      ingnorecolor:false,
      ingnoresize:false,
      ingnoretwo:false,
      success:false,
      col:"",
      size:"",
        msg:{},
    };
  },
    filters:{
        price(money){
            return "¥"+money.toFixed(2);
        }
    },
  mounted() {
      //console.log(this.msgId);
    window.onscroll = this.handleScroll;
    //向后台获取详情页的数据
    this.$http.get('api/goods',{
        params:{
            goodsid:this.msgId
        }
    }).then(({data}) => {
        this.goodslist = data;
       // console.log(this.goodslist);
    })
  },
  computed: {
      ...mapState({
          msgId:(state)=>state.data.getId
      }),
    showimg() {
      if (this.goodslist.goodsImgs.length > 1) {
        return this.loop == true;
        return this.swiperPagination == true;
      }
    },
    commentPageChange() {
      if (this.count < 0) {
        return this.commentPage == false;
      }
    },
    showCircle() {
      if (this.amount > 0) {
        //console.log(this.amount);
        return (this.showCircles = true);
      }
    }
  },

  methods: {
      toCart(){
          this.$router.push("/cart");
      },
      favorite() {
          //不红的时候  没收藏的时候 loveheart为true;
          if(this.loveheart){
              this.$http.get('/api/user/addCollection',{
                  params:{
                      goodsid:this.goodslist.goodsId
                  }
              }).then(({data}) => {
                 console.log(data);
              })
          }
          if(this.love){
              this.$http.get('/api/user/removeCollection',{
                  params:{
                      goodsid:this.goodslist.goodsId
                  }
              }).then(({data}) => {
                  console.log(data);
              })
          }

          this.love = !this.love;
          this.loveheart = !this.loveheart;

      },
      //加入购物车
      addcarts() {
          this.amount = this.changenum;
          this.chooseAgain = !this.chooseAgain;
          //同时还要向后台穿一波数据,接口到了再写
          this.$http.get('/api/user/addCart',{
              params:{
                  goodsid:this.goodslist.goodsId,
                  size:this.keysize,
                  color:this.keycolor,
                  count:this.amount
              }
          }).then((data)=>{
              //console.log(data);
          });
      },
      showIns(){
          // this.$router.push('order');
      },
      //颜色尺寸的选择
      tabclick(obj,_index){
          this.keycolor = obj;
          if(this.keycolor == ''){
              this.pleChCo = true;
          }else{
              this.pleChCo = false;
              this.yixuan = true;
          }
          this.iscur = _index;
      },
      tabclick2(obj,_index){
          this.keysize = obj;
          this.iscur2 = _index;
      },
      yesMsg(){

      },
      changecount(val){
          if(this.changenum == 1 && val == -1){
              this.changenum = 1;
              //弹框 您选择的数量不能为0
              $('.iszero').show();
              setInterval(function(){
                  $('.iszero').hide();
              },1000);
          }else{
              this.changenum += val;
          }
      },
      getGoodsMsg(){
          this.chooseAgain = !this.chooseAgain;
      },
      //
    del() {
      if (this.amounts <= 1) {
        this.amounts = 1;
      } else {
        this.amounts--;
      }
    },
    commentactive() {
      if (this.count <= 0) {
        this.comments == this.comments;
      } else {
        (this.comments = !this.comments), (this.comment = !this.comment);
      }
    },
    active() {
      (this.normalproblem = !this.normalproblem),
        (this.normalproblems = !this.normalproblems);
    },
    backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100;
          document.documentElement.scrollTop -= 100;
        } else {
          clearInterval(back);
        }
      });
    },
    handleScroll() {
      if (document.documentElement.scrollTop + document.body.scrollTop > 2000) {
        this.returnTop = true;
      } else {
        this.returnTop = false;
      }
    },
    shadowchange() {
      this.shadow = !this.shadow;
      console.log(this.shadow);
    },
    colorchange(){
      this.colors=!this.colors;
      console.log(this.colors)
      this.color=!this.color;
      console.log(this.color)

    },
    sizechange(){
      this.size=!this.size;
      this.sizes=!this.sizes;
    }
  }
};
</script>

<style lang="less" scoped>
    @import '../cart/moGoods';
@import "../../assets/css/mixin";
// 第一层
.wrap {
  font-family: helvetica;
  background: #f0f0f0;
}
.goods-name {
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
  width: 100%;
  background-color: #515150;
  color: #fff;
  .name {
    font-size: 0.7rem;
    line-height: 1.2rem;
  }
}
.price-data {
  // position: relative;
  width: 100%;
  height: 2.2rem;
  .border-bottom(#e0e0e0);
  background-color: #fff;
  color: #b0b0b0;
  .current-price {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: 0.25rem;
    color: #d0021b;
    // float: left;
    display: inline-block;
    line-height: 2.2rem;
  }
  .previous-price {
    display: inline-block;
    line-height: 2.2rem;
    // float: left;
  }
}
.card-details {
  padding-left: 0.75rem;
  li {
    float: left;
    margin: 0;
    width: 33.3%;
    height: 2.2rem;
    font-size: 0.55rem;
    .silver-card {
      width: 1.1rem;
      height: 0.8rem;
      vertical-align: center;
      display: inline-block;
      background-image: url(./sprite.detail.page.css.product.png);
      background-position: 0 0;
      background-size: 2.8rem 1.8rem;
    }
    .gold-card {
      width: 1.1rem;
      height: 0.8rem;
      vertical-align: center;
      display: inline-block;
      background-image: url(./sprite.detail.page.css.product.png);
      background-position: -1.5rem 0;
      background-size: 2.8rem 1.8rem;
    }
    .platinum-card {
      width: 1.1rem;
      height: 0.78rem;
      vertical-align: center;
      display: inline-block;
      background-image: url(./sprite.detail.page.css.product.png);
      background-position: 0 -1rem;
      background-size: 2.8rem 1.8rem;
    }
    & span {
      display: inline-block;
      padding-left: 0.2rem;
      padding-top: 0.125rem;
      vertical-align: middle;
      line-height: 2.2rem;
    }
  }
}

.good-discount {
  font-size: 0.7rem;
  color: #444;
  .good-discount-details {
    position: relative;
    padding: 0.75rem 1.5rem 0.75rem 0.75rem;
    line-height: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .promotion-icon {
      background-color: #d0021b;
      color: #fff;
      padding: 0 0.1rem;
      border-radius: 0.1rem;
      margin-right: 0.25rem;
      font-size: 0.55rem;
      float: left;
    }
    .down-arrow {
      background-image: url(./down-arrow.png);
      width: 100%;
      height: 100%;
    }
  }
}
//第二层
.feedback {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  // background-color: #f0f0f0;
  .nav {
    width: 100%;
    padding: 0.25rem 0;
    background-color: #fff;
    //改1px
    border-top: 1px solid #e0e0e0;
    .border-bottom( #e0e0e0);
    overflow: hidden;
    .nav-left {
      box-sizing: border-box;
      float: left;
      width: 50%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      text-align: center;
      color: #b0b0b0;
    }
    .nav-right {
      box-sizing: border-box;
      float: left;
      width: 50%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      text-align: center;
      color: #b0b0b0;
      //改1px
      border-left: 1px solid #e0e0e0;
    }
  }
  //商品评价页面
  .commentPage {
    // display: none;
    .username {
      font-size: 0.6rem;
      line-height: 1.55rem;
      color: #444;
      padding-left: 0.7rem;
      padding-right: 0.45rem;
      float: left;
    }
    .goods-spec {
      color: #444;
      font-size: 0.6rem;
      line-height: 1.55rem;
    }
    .detail-content {
      color: #444;
      font-size: 0.7rem;
      line-height: 0.9rem;
      padding-left: 0.7rem;
      padding-right: 0.7rem;
    }
    .time {
      width: 100%;
      .border-bottom( #e0e0e0);
      .comment-time {
        color: #c1c1c1;
        font-size: 0.6rem;
        line-height: 1.55rem;
        display: inline-block;
        padding-left: 0.7rem;
      }
    }
  }
  //常见问题页面
  .question-wrap {
    .border-bottom(#e0e0e0);
    // display:none;
    .question {
      padding: 0.5rem 0.7rem;
      background-color: #fff;
      .question-detail {
        font-size: 0.6rem;
        color: #444;
        .icon-question {
          // background: url(./question.png) no-repeat;
          font-size: 0.7rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .answer-detail {
        font-size: 0.6rem;
        line-height: 0.9rem;
        color: #b0b0b0;
        margin-top: 0.35rem;
        .icon-check_circle {
          // background: url(./answer.png) no-repeat;
          font-size: 0.7rem;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}
//learnmore
.learnmore {
  display: block;
  min-height: 2.2rem;
  text-align: center;
  background-color: #fff;
  .border-bottom(#e0e0e0);
  line-height: 2.2rem;
  font-size: 0.7rem;
  color: #b0b0b0;
  span {
    color: #b0b0b0;
  }
  .icon-keyboard_arrow_right {
    // background: url(./right-arrow.png) no-repeat;
    font-size: 1rem;
    display: inline-block;
    vertical-align: middle;
    // margin-top: -0.4rem;
    color: #b0b0b0;
  }
}
//第三层
.enter-store-wrap {
  .border-bottom(#e0e0e0);
  border-top: 1px solid #e0e0e0;
  .enter-store {
    position: relative;
    overflow: hidden;
    padding: 0 4.5rem 0 2.85rem;
    background-color: #fff;
    .store-pic {
      display: inline-block;
      width: auto;
      height: 1.7rem;
      vertical-align: middle;
      margin-left: -1.9rem;
    }
    .name {
      color: #444;
      font-size: 0.85rem;
    }
    .store-link {
      position: absolute;
      top: 0.5rem;
      right: 0;
      padding-right: 0.75rem;
      color: #b0b0b0;
      text-align: right;
      font-size: 0.7rem;
      .icon-keyboard_arrow_right {
        // background: url(./right-arrow.png) no-repeat;
        font-size: 1rem;
        display: inline-block;
        vertical-align: middle;
        // margin-top: -0.4rem;
      }
    }
  }
}
//第四层
.goods-desc {
  box-sizing: border-box;
  padding: 0 0.7rem;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  h2 {
    border-bottom: 1px solid #e0e0e0;
    color: #444;
    font-size: 0.7rem;
    line-height: 2.2rem;
    span {
      color: #a0a0a0;
      font-size: 0.45rem;
    }
  }
  .detail-table {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.6rem;
    line-height: 0.9rem;
    overflow: hidden;
    .column {
      float: left;
      box-sizing: border-box;
      padding: 0.15rem 3%;
      width: 49.9%;
      border: 1px solid #fff;
      background-color: #eee;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.6rem;
    }
    .color {
      float: right;
      box-sizing: border-box;
      padding: 0.15rem 3%;
      width: 49.9%;
      border: 1px solid #fff;
      background-color: #eee;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.6rem;
      overflow: hidden;
    }
    .gender {
      float: left;
      box-sizing: border-box;
      padding: 0.15rem 3%;
      width: 49.9%;
      border: 1px solid #fff;
      background-color: #eee;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 0.6rem;
      overflow: hidden;
    }
  }
  .element {
    padding: 0.4rem 0.3rem;
    background-color: #eee;
    color: #444;
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
    line-height: 0.8rem;
  }
}
//第六层
.detail {
  margin-top: 1rem;
  .notice {
    font-size: 0.7rem !important;
    color: #444;
    line-height: 1rem !important;
    letter-spacing: 1px;
    word-break: break-all;
  }
  //图片为行间样式
}
.return-top {
  position: absolute;
  top: 1.175rem;
  right: 1.175rem;
  left: auto;
  bottom: auto;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  background: url(https://cdn.yoho.cn/yohobuywap-node/6.6.15/img/product/back-to-top.png?163fdd2c876)
    no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  display: none;
  z-index: 10000;
  position: fixed;
  top: auto;
  left: auto;
  right: 0.75rem;
  bottom: 3.5rem;
  z-index: 9999;
  display: block;
}

//轮播图
.container {
  position: relative;
  width: 100%;
  height: 16.7rem;
  max-height: 16.7rem;
  overflow: hidden;
  background: #ffffff;
  // padding-left: 0;

  .swiper {
    position: relative;
    margin: 0.75rem auto;
    width: 11.2rem;
    height: 16.7rem;
    .swiper-slide {
      width: 260px;
      // margin-right: 3px;
      a {
        float: left;
        width: 100%;
        height: 100%;
        text-decoration: none;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .swiperPagination {
      position: absolute;
      bottom: 2.5rem;
      left: 4rem;
      display: inline-block;
      padding: 0.17rem 0.1rem;
      width: 2.6rem;
      line-height: 1.3;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 1.25rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      .my-bullet {
        float: left;
        display: inline-block;
        width: 0.37rem;
        height: 0.37rem;
        border: 1px solid lightgrey;
        border-radius: 50%;
        background: transparent;
      }
      .my-bullet-active {
        background: #ffffff;
      }
    }
  }
}
//轮播图蒙版层
.shadows {
  width: 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  background-color: #000;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  z-index: 999;
  display: flex;
  -ms-align-items: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  image {
    widows: 100%;
    height: 500px;
    margin-top: 83.5px;
  }
}
//底部
.cart-bar {
  // position: relative;
  position: fixed;
  bottom: 0;
  // left: 50%;
  // margin-left: -8rem;
  z-index: 2;
  box-sizing: border-box;
  padding: 0.5rem 0.7rem;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  background-color: #fff;
  a {
    float: left;
    margin-right: 1rem;
    .enter{
      font-size: 0.8rem;
    }
    i {
      color: #444;
      font-size: 1rem;
      line-height: 1rem;
    }
    span {
      color: #444;
      font-size: 0.375rem;
    }
    p {
      color: #444;
      font-size: 0.375rem;
      // margin-right: 0.9rem;
      text-align: center;
      display: block;
    }
  }
  .add-cart {
    width: 6.5rem;
    height: 2rem;
    background-color: #eb0313;
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    line-height: 2rem;
    margin-left: 0.4rem;
    span {
      color: #fff;
    }
  }
  .bottom-cart {
    padding-left: 1rem;
    position: relative;
    .circle {
      position: absolute;
      left: 2.3rem;
      top: 0;
      width: 0.7rem;
      height: 0.7rem;
      background: red;
      color: white;
      border-radius: 50%;
      text-align: center;
    }
  }
  .icon-home2 {
    margin-left: 0.7rem;
  }
  .icon-cart {
    margin-left: 0.4rem;
  }
}
//商品详情
.addcart-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50000;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  .lookout{
    position: fixed;
    text-align: center;
    width: 50%;
    padding: 15px;
    top: 50%;
    left: 50%;
    margin-left: -25%;
    margin-top: -45px;
    background-color: rgba(0,0,0,.7);
    color: #fff;
    font-size: .6rem;
    border: none;
    z-index: 100;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .chose-panel {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 65%;
    background: #fff;
    z-index: 1000;
    .choose-wrap {
      position: relative;
      padding-bottom: 0.75rem;
      min-height: 4.75rem;
      border-bottom: 1px solid #e6e6e6;
      width: 16rem;
      margin: 0 auto;
      img {
        width: 4.1rem;
        min-height: 5rem;
        position: absolute;
        top: -1.5rem;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        margin-left: 1rem;
      }
      .choose {
        display: inline-block;
        vertical-align: top;
        margin-left: 6rem;
        height: auto;
        margin-top: 0.75rem;
        font-size: 1rem;
        line-height: 1.2rem;
      }
      .remove {
        background: url(./delete.png) no-repeat;
        width: 1rem;
        height: 1rem;
        float: right;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        color: #b1b1b1;
        z-index: 2;
        position: absolute;
        top: 1rem;
        left: 15rem;
      }
    }
    .color {
      position: relative;
      width: 16rem;
      overflow: hidden;
      border-bottom: 1px solid #e6e6e6;
      margin: 0 auto;
      font-size: 1rem;
      height: 3.6rem;
      .color-name {
        margin-top: 1.25rem;
        left: 0;
        height: 3rem;
        display: block;
        .btn {
          border-color: #e10;
          background: #d0021b;
          color: #fff;
          border-radius: 5px;
          padding: 0.3rem 0.4rem;
        }
        .btn1 {
          width: 1.5rem;
          display: inline-block;
          text-align: center;
        }
      }
    }
    .numbers {
      margin-top: 1.25rem;
      .number {
        float: left;
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-left: 1.4rem;
        margin-right: 0.3rem;
      }
      div {
        float: left;
      }
      .delete,
      .add {
        display: block;
        float: left;
        width: 2rem;
        height: 2rem;
        border: 1px solid #e6e6e6;
        text-align: center;
        line-height: 2rem;
      }
      .amount {
        float: left;
        margin-left: -1px;
        padding: 0;
        width: 2.65rem;
        height: 2rem;
        border: 1px solid #e6e6e6;
        text-align: center;
        line-height: 2rem;
        outline: none;
        font-size: 1rem;
      }
    }

  }
}
    .btn-wrap {
        position: fixed;
        left:0;
        z-index:9999;
        bottom: 0;
        width: 100%;
        .buynow {
            width: 50%;
            height: 2.344rem;
            line-height:2.344rem;
            border: none;
            background: #444;
            color: #fff;
            font-size: 0.8rem;
            float: left;
            outline: none;
            border:0;
        }
        .addCarts {
            width: 50%;
            height: 2.344rem;
            line-height:2.344rem;
            border: none;
            background: #d0021b;
            color: #fff;
            font-size: 0.8rem;
            float: left;
            outline: none;
            border:0;
        }

    }
</style>
