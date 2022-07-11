<template>
  <div>
    <h2>蓝莓页面</h2>
    <div v-for="item in list" :key="item.index">
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      function() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
h2 {
  width: 100px;
  height: 30px;
  margin: 30px auto;
}
</style>
