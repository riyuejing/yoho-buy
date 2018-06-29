<template>
  <div class="wrap">
    <order-title title="我的订单"></order-title>
    <a class="fraud-tip" href="javascript:void(0)">
      <i class="iconfont icon-icon"></i>
      <span class="tip-title">
        <i class="iconfont icon-jinggao-copy"></i>
        关于防诈骗的重要提醒
      </span>
      <span class="tip-content">有货不会以任何理由要求您退货退款，请您提高警惕。
      </span>
    </a>
    <div class="order-wrap">
      <div class="order" v-for="(item, index) in orders" :key="item.orderId">
        <header class="header">
          订单编号: {{item.orderId}}
          <span class="order-status">交易成功</span>
        </header>
        <section class="order-goods">
            <div class="order-good" v-for="(good) in item.orderList" :key="good._id">
              <div class="thumb-wrap">
                <div class="pic-c">
                  <img class="thumb" :src="good.goodsImgs[0]">
                </div>
                <p class="tag"></p>
              </div>
              <div class="deps">
                <p class="name row">{{good.goodsName}}</p>
                <p class="row">
                  <span class="color">颜色:{{good.color}}</span>
                  <span class="size">尺码:{{good.size}}</span>
                </p>
                <p class="row price-wrap">
                  <span class="price">¥{{good.goodsPrice.currentPrice}}</span>
                  <span class="count">×{{good.count}}</span>
                </p>
              </div>
            </div>
        </section>
        <footer class="footer">
          共{{totalCount(index)}}件商品  实付
          <span class="sum-cost">¥{{totalPrice(index)}}.00</span>
        </footer>
        <div class="order-opt">
          <span @click="deleteOrder(item.orderId, index)" class="btn del">删除订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import orderTitle from "../../components/common/titleTop";
export default {
  name: "orderList",
  data() {
    return {
      orders: []
    };
  },
  components: {
    orderTitle
  },
  computed: {},
  methods: {
    deleteOrder(id, index) {
      this.$http
        .get("/api/user/removeOrder", {
          params: {
            orderid: id
          }
        })
        .then(res => {
          this.orders.splice(index, 1);
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
    },
    totalPrice(index) {
      let temp = 0;
      for (let item of this.orders[index].orderList) {
        temp += item.goodsPrice.currentPrice * item.count;
      }
      return temp;
    },
    totalCount(index) {
      let temp = 0;
      for (let item of this.orders[index].orderList) {
        temp += item.count;
      }
      return temp;
    }
  },
  created() {
    this.$http
      .get("/api/user/getOrders")
      .then(res => {
        this.orders = res.data;
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style lang="less" scoped>
@import "https://at.alicdn.com/t/font_724863_t8zb35lbi1.css";
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  border: 0;
}
.wrap {
  position: relative;
  height: 100%;
  background-color: #f0f0f0;
}
.fraud-tip {
  background: #fff;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  > .iconfont {
    display: block;
    color: #b0b0b0;
    float: right;
    height: 1.75rem;
    width: 0.75rem;
    line-height: 1.75rem;
    text-align: right;
  }
  > .tip-title {
    display: block;
    height: 0.65rem;
    line-height: 0.65rem;
    color: #444;
    font-size: 0.6rem;
    > .icon-jinggao-copy {
      color: red;
    }
  }
  > .tip-content {
    display: inline-block;
    margin-top: 0.4rem;
    color: #b0b0b0;
    font-size: 0.55rem;
    width: 94%;
  }
}
.order-wrap {
  .order {
    position: relative;
    display: block;
    background: #fff;
    margin: 0.75rem 0;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    .footer {
      height: 2.25rem;
      line-height: 2.25rem;
      padding: 0 0.75rem;
      text-align: right;
      border-top: 1px solid #e0e0e0;
      font-size: 0.75rem;
    }
    .sum-cost {
      color: #e01;
      margin-left: 0.125rem;
    }
    .order-opt {
      padding: 0.5rem 0;
      padding-right: 0.5rem;
      border-top: 1px solid #e0e0e0;
      text-align: right;
      overflow: hidden;
    }
    .order-opt .btn {
      display: inline-block;
      box-sizing: border-box;
      height: 1.5rem;
      line-height: 1.5rem;
      width: 3.5rem;
      font-size: 0.6rem;
      text-align: center;
      border: 1px solid #000;
      border-radius: 5px;
      margin-left: 0.375rem;
      margin-top: 0.125rem;
    }
  }
}
.header {
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.7rem;
  height: 2.25rem;
  line-height: 2.25rem;
  padding: 0 0.75rem;
  .order-status {
    position: absolute;
    right: 0.6rem;
    top: 0;
  }
}
.order-good:last-child {
  border-bottom: none;
}
.order-good,
.order-good .pic-c {
  position: relative;
}
.order-good {
  margin: 0.5rem 0;
  margin-left: 0.85rem;
  height: 4rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.65rem;
  .thumb-wrap {
    position: relative;
    float: left;
    width: 3rem;
    height: 4rem;
  }
  .tag {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    text-align: center;
    font-size: 0.3rem;
  }
  .thumb {
    width: 100%;
    height: 100%;
  }
  .deps {
    margin-left: 3.375rem;
  }
  .name {
    font-size: 0.7rem;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .row:nth-child(2) {
    height: 1.125rem;
    line-height: 1.125rem;
    width: 90%;
  }
  .row:nth-child(2) > span {
    margin-right: 0.375rem;
  }
  .row .color {
    display: inline-block;
    max-width: 4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: bottom;
  }
  .color,
  .size {
    color: #b6b6b6;
  }
  .price-wrap {
    position: absolute;
    top: 0;
    right: 0.75rem;
    text-align: right;
  }
  .price {
    color: #e01;
  }
  .count,
  .sale-price {
    display: block;
    color: #999;
    text-align: right;
    line-height: 1.125rem;
  }
}
</style>
