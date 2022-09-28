<template>
  <div>
   <!-- 主题内容 -->
   <router-view></router-view>
   <!-- 底部tabbar -->
   <TabBar></TabBar>
  </div>
</template>

<script setup lang="ts">
import TabBar from "@/components/tabBar/TabBar.vue";

</script>

<style lang="scss" scoped>

</style>