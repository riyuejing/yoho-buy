<template>
    <div class="entirety">
        <div class="header">
            <i class="iconfont icon-zuojiantou"></i>
            <span>添加地址</span>
        </div>
        <div>
            <div class="dogwrap">
                <div class="smalldogwrap">
                    <div class="doghouse">
                        <p>
                            包狗
                        </p>
                        <p>15251715252</p>
                    </div>
                    <div class="dogaddress">浙江省台州市狗屋1号</div>
                    <div class="icons">
                    <i class="iconfont icon-bi"></i>
                    <i class="iconfont icon-lajixiang "></i>
                    </div>
               </div>
            </div>
        </div>
        <!-- 保存 -->
    </div>
</template>

<script>
// import addaddress from "./addAddress"
export default {
  name: "addresss"
  // components: {
  //           addaddress,
  //       },
};
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.entirety {
  background: #f0f0f0;
  height: 100%;
  overflow: hidden;
}
.header {
  height: 2.75rem;
  line-height: 2.75rem;
  background: black;
  font-size: 0.9rem;
  font-weight: 700;

  span {
    margin: 0 6.5rem;
    color: white;
    width: 4rem;
  }
}
.icon-zuojiantou {
  color: white;
}
.dogwrap {
  background: #ffffff;
  .smalldogwrap {
    padding: 1rem;
  }
  .doghouse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    line-height: 1.4rem;
    color: #444;
    font-weight: 700;
  }
  .dogaddress {
    font-size: 0.7rem;
    line-height: 0.95rem;
    color: #b0b0b0;
  }
  .icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #b0b0b0;
    i {
      width: 2rem;
      display: block;
    }
  }
}
</style>
