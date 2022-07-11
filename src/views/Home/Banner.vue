<template>
  <div>
    <template>
      <div class="block">
        <el-carousel trigger="click" height="500px">
          <el-carousel-item v-for="item in banner" :key="item.index">
            <img :src="item.img" alt="" width="100%" height="500px" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array,
      function() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
