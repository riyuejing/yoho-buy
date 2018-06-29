<template>
    <div class="entirety">
        <div class="header">
             <i class="iconfont icon-zuojiantou"></i>
            <span>添加地址</span>
        </div>
        <p class="margin">为提高配送时效，请你尽量准确填写四级地址</p>
        <!-- 保存 -->
        <iframe id="iframe" src="http://www.17sucai.com/preview/869565/2017-11-08/CityPicker/example/cityPicker.html" frameborder="0"  width="100%" ></iframe>
         <!-- <button >保存</button> -->
         
    </div>
</template>

<script>
// import addaddress from "./addAddress"
export default {
  name: "addresss",
  // components: {
  //           addaddress,
  //       },
};
</script>

<style lang="less" scoped>
html,body{
  height: 100%;
  overflow: hidden;
  width: 100%;
}
.icon-zuojiantou{
    color: white;
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
.margin {
  line-height: 1rem;
  height: 1rem;
  font-size: 0.8rem;
  text-align: center;
  background: #f0f0f0;
  color: #aeaeae;
  padding: 0.5rem 0 0  ;
}
  #iframe{
        // margin-top: 18px;
        height: 100%;
        
    }
</style>
