<template>
  <van-tabbar 
  v-model="active" 
  class="tab" 
  @change="onchange_fn"
  route
  >
    <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/fen" icon="cluster-o">分销</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/mine" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
  <div class="tab_box"></div>
</template>

<script setup lang="ts">
  // import router from "@/router";
  import { ref } from "vue";
  let active:any= ref(0);
  //点击事件函数
  let onchange_fn:(index?:number | string)=>void = function(index){
    console.log(index);
    active.value=index;
    // switch(index){
    //   case 0:router.push('/')
    //     break;
    //   case 1:router.push('/fen')
    //     break;
    //   case 2:router.push('/cart')
    //     break;
    //   case 3:router.push('/mine')
    //     break;
    // }
  }
</script>

<style lang="scss" scoped>
.tab_box {
  width: 100%;
  height: var(--van-tabbar-height);
}
</style>