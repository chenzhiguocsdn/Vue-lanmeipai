<template>
  <div>
    <!-- 公共导航 -->
    <MyMenu></MyMenu>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from "../components/MyMenu.vue";
export default {
  components: {
    MyMenu,
  },
};
</script>

<style></style>
