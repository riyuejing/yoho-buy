<template>
    <div>
        <TitleTop title="确认订单"></TitleTop>
        <div class="wrap">
            <div class="fraud-tip">
            <p>
                <i class="icon-notification"></i>
                <span class="notify">关于防诈骗的重要提醒</span>
            </p>
            <p class="salesreturn">
                <span>有货不会以任何理由要求您退货退款，请您提高警惕。</span>
    
            </p>
        </div>
        <div class="margin"></div> 
        <!-- 没有任何收货地址的情况下 -->
        <div class="chooseaddress" v-if="isAddress">
            <div>
                <i class="iconfont icon-dingwei"></i>
                <!-- <span class="name">张莹</span> -->
                <a href="###"><span>选择地址</span></a>
            </div>
            <div>
               <span class="icon-keyboard_arrow_right"></span>
            </div>
        </div>
        <!-- 有收货地址的情况下 -->
        <div class="hasAddress" v-if="hasAddress">
            <div class="iconwrap">
                <i class="iconfont icon-dingwei"></i>
                <div  class="namewrap">
                    <div class="name">
                        <p>莹狗</p>
                        <p>15251715252</p>
                    </div>
                    <div>狗屋</div>
                </div>
            </div>
            <div class="otheraddress">其他地址<span class="icon-keyboard_arrow_right"></span ></div>
        </div>
        <div class="margin"></div>
        <!-- 支付方式 -->
        <div>
            <div class="style">
                <div class="pay">
                    <div>支付方式</div>
                    <div>在线支付</div>
                    <!-- <i></i> -->
                </div>
                <div class="pay">
                    <div>配送方式</div>
                    <div>普通快递</div>
                </div>
                <div class="pay paytime">
                    <div>送货时间</div>
                    <div>仅周一至周五送货</div>
                </div>
            </div>
        </div>
        <div class="margin"></div>
        <div>
            <div class="contentwrap">
                <!-- 包裹 -->
                <div class="allwrap">
                    <!-- 里面的那块的左边 -->
                    <div class="leftwrap">
                        <img src="https://img11.static.yhbimg.com/goodsimg/2018/06/15/18/01249073f1b7b094e8cd54b422e99e73e7.jpg?imageMogr2/thumbnail/120x160/background/d2hpdGU=/position/center/quality/60" alt="">
                        <div>
                            <p class="product">手机壳扒鸡扒鸡</p>
                            <p class="colorsize">
                                <span class="color">颜色：黑色</span>
                                <span class="size color">尺寸：7P/8P</span>
                            </p>
                        </div>
                    </div>
                    <!-- 里面的那块的右边 -->
                    <div class="rightwrap">
                        <p class="price">5元</p>
                        <p  class="number">x1</p>
                    </div>
                </div>
                <div class="contentbottom">
                    <span >共{{1}}件商品</span>
                    <span>合计 <span class="productprice">{{25}}</span></span>
                </div>
            </div>
        </div>
        <!-- 包裹 -->
        
        <div class="margin"></div>
        <div>
            <div   class="total">
                <div class="paywrap">
                    <span>商品金额</span>
                    <span>134元</span>
                </div>
                <div class="paywrap">
                    <span>运费</span>
                    <span>+10元</span>
                </div>
            </div>
           
        </div>
        </div>
        
         <!-- 需要支付的价格 -->
        <div>
            <div class="payprice">
                <span>您需要支付：144元</span>
                <button >提交订单</button>
            </div>
        </div>
    </div>
</template>

<script>
import TitleTop from "../../components/common/titleTop";
export default {
  name: "order",
  data() {
    return {
      isAddress: true,
      hasAddress: false
    };
  },
  components: {
    TitleTop
  }
};
</script>

<style lang="less" scoped>
.wrap {
  position: absolute;
  top: 2.625rem;
  bottom: 2rem;
  width: 100%;
  overflow: scroll;
}

.fraud-tip {
  background: #fff;
  display: block;
  padding: 0.3rem 0.75rem 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  i {
    color: #d80425;
    font-size: 0.5rem;
  }
  .notify {
    display: block;
    height: 0.85rem;
    line-height: 0.85rem;
    color: #444;
    font-size: 0.75rem;
    background-repeat: no-repeat;
    background-size: auto 97%;
    padding-left: 0.9rem;
    margin-top: -0.9rem;
  }
  .salesreturn {
    display: inline-block;
    margin-top: 0.4rem;
    color: #b0b0b0;
    font-size: 0.55rem;
    width: 94%;
  }
}
.margin {
  width: 100%;
  height: 0.75rem;
  background: #f0f0f0;
}
//没有收货地址
.chooseaddress {
  padding: 1rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.style {
  padding: 1rem;
  .pay {
    padding: 0.5rem;
    font-size: 0.8rem;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .paytime {
    border: none;
  }
}
//有收货地址
.hasAddress {
  padding: 0.5rem 0.8rem;
  font-size: 0.8rem;
  .iconwrap {
    display: flex;
    // justify-content: space-around;
    align-items: center;
    i {
      font-size: 2rem;
    }
    .namewrap {
      margin-left: 0.5rem;
    }
    .name {
      width: 14rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .otheraddress {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: red;
  }
}
.contentwrap {
  padding: 1rem;
  .allwrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 1rem;
    .leftwrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 3rem;
        height: 4rem;
      }
      .product {
        font-size: 0.8rem;
        max-width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .colorsize {
        height: 1.125rem;
        line-height: 1.125rem;
        margin-left: 0.5rem;
        .color {
          color: #b6b6b6;
          margin-right: 0.375rem;
          font-size: 0.7rem;
        }
      }
    }
    .rightwrap {
      width: 2rem;
      .price {
        color: #e01;
        font-size: 0.7rem;
      }
      .number {
        line-height: 1.125rem;
        font-size: 0.6rem;
        color: #999;
      }
    }
  }
  .contentbottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem;
    font-size: 0.8rem;
    color: #999;
    .productprice {
      color: #e01;
    }
  }
}
.total {
  padding: 0.5rem;
}
.paywrap {
  line-height: 1rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payprice {
  position: fixed;
  bottom: 0;
  width: 80%;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  z-index: 500;
  background: #fff;
  display: flex;
  padding: 0rem 0.5rem;
  button {
    width: 5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: white;
    background: #e01;
    display: block;
    outline: none;
    border: none;
  }
}
</style>
