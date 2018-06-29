<template>
<!-- 加入购物车的页面 -->
    <div>
        <div class="addcart-page" v-if="panel">
            <div  class="chose-panel">
                <div class="lookout" v-if="ingnorecolor">请选择颜色呐~</div>
                <div class="lookout"  v-if="ingnoresize">请选择尺寸呐~</div>
                <div class="lookout" v-if="ingnoretwo">请选择颜色和尺寸呐~</div>
                <div class="lookout" v-if="success">成功添加入购物车了呢~</div>
                <!-- 图片 -->
                <div class="choose-wrap">
                    <img src="" alt="" class="proimg">
                    <div class="choose">
                        <p v-if="goodslist.goodsPrice">¥{{goodslist.goodsPrice.currentPrice}}</p>
                        <p v-if="stillchoose" >请选择颜色,尺码</p>
                        <p v-if="alreadychoose">已经选择黑色，x</p>
                        <span class="iconfont remove icon-shanchu" @click="isAdd"></span>
                    </div>
                </div>
               <!-- 颜色 -->
                <div class="color">
                    <span  v-if="colors" class="color-name">颜色 <span class="btn" @click="colorchange()">黑色</span></span>
                    <span v-if="color" class="color-name">颜色 <span class="btn" @click="colorchange()"  style="background:white;border:1px solid;color:black">黑色</span></span>
                </div>
                <!-- 尺码 -->
                <div class="color">
                    <span class="color-name" v-if="sizes">尺码 <span  @click="sizechange()" class="btn btn1">x</span></span>
                    <span class="color-name" v-if="size" >尺码 <span  style="background:white;border:1px solid;color:black"   @click="sizechange()"  class="btn btn1">x</span></span>
                </div>
              <!-- 数量 -->
              <div class="numbers">
                  <span class="number">数量</span>
                  <div>
                      <span class="delete" @click="del()">-</span>
                      <input  class="amount"   type="text"    disabled="1" v-model="amounts">
                      <span class="add" @click="amounts++">+</span>
                  </div>
              </div>
              <div class="btn-wrap">
                  <button class="buynow" >立即购买</button>
                  <button class="addCarts" @click="addcarts">加入购物车</button>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "bt",
  data() {
    return {
      goodslist: {},
      swiperPagination: false,
      commentPage: true,
      returnTop: false,
      shadow: false,
      panel: true,
      amounts: 1,
      amount: 0,
      showCircles: false,
      color: false,
      colors: true,
      size: false,
      sizes: true,
      ingnorecolor: false,
      ingnoresize: false,
      ingnoretwo: false,
      success: false,
      stillchoose:true,
      alreadychoose:false
    };
  },
  mounted() {
    window.onscroll = this.handleScroll;
  },
  computed: {
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
        console.log(this.amount);
        return (this.showCircles = true);
      }
    }
  },

  methods: {
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
              // console.log(document.documentElement.scrollTop + document.body.scrollTop)
              // console.log(this.returnTop);
          } else {
              this.returnTop = false;
              // console.log(this.returnTop)
          }
      },
      shadowchange() {
          this.shadow = !this.shadow;
          console.log(this.shadow);
      },
      isAdd() {
          this.panel = !this.panel;
      },
      favorite() {
          (this.love = !this.love), (this.loveheart = !this.loveheart);
      },
      addcarts() {
          this.amount = this.amounts;
          this.panel = !this.panel;
      },
      colorchange() {
          this.colors = !this.colors;
          console.log(this.colors);
          this.color = !this.color;
          console.log(this.color);
      },
      sizechange() {
          this.size = !this.size;
          this.sizes = !this.sizes;
      }
  }
};
</script>


<style  lang="less" scoped>
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
  .lookout {
    position: fixed;
    text-align: center;
    width: 50%;
    padding: 15px;
    top: 50%;
    left: 50%;
    margin-left: -25%;
    margin-top: -45px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 14px;
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
        .proimg{
        width: 4.7rem;
          height:6.272rem;
        position: absolute;
        top: -1.5rem;
        border: 1px solid #e6e6e6;
          z-index: 999;
        border-radius: 5px;
      }
      .choose {
        display: inline-block;
        vertical-align: top;
        margin-left: 6rem;
        height: auto;
        margin-top: 0.75rem;
        font-size: 14px;
        line-height: 1.2rem;
      }
      .remove {
        // background: url(./delete.png) no-repeat;
        float: right;
        text-align: center;
        line-height: 1.5rem;
        // color: #b1b1b1;
        z-index: 2;
        position: absolute;
        top: 1rem;
        left: 15rem;
      }
      .icon-shanchu{
          font-size:14px;
      }
    }
    .color {
      position: relative;
      width: 16rem;
      overflow: hidden;
      border-bottom: 1px solid #e6e6e6;
      margin: 0 auto;
      font-size: 14px;
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
        font-size: 14px;
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
          font-size: 14px;
      }
    }
    .btn-wrap {
      position: fixed;
      bottom: 0;
      width: 100%;
      .buynow {
        width: 50%;
        height: 2rem;
        border: none;
        background: #444;
        color: #fff;
          font-size: 14px;
        float: left;
        outline: none;
      }
      .addCarts {
        width: 50%;
        height: 2rem;
        border: none;
        background: #d0021b;
        color: #fff;
          font-size: 14px;
        float: left;
        outline: none;
      }
    }
  }
}
</style>
