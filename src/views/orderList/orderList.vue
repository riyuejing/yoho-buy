<template>
  <div>
    <order-title :title="我的订单"></order-title>
    <h1>我的订单</h1>
  </div>
</template>

<script>
import orderTitle from '../../components/common/titleTop'
export default {
  name: 'orderList',
  data() {
    return {

    }
  },
  components: {
    orderTitle,
  }
}
</script>

<style lang="less" scoped>

</style>
