<template>
  <div class="container">
    <h2 class="title">蓝莓酱</h2>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        <div class="item">
          <img :src="item.img" :alt="item.title" />
          <span>{{ item.title }}</span>
        </div>
      </li>
      <div class="clear"></div>
    </ul>
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
.container {
  width: 1200px;
  margin: 20px auto;
}
.title {
  text-align: center;
  padding: 10px;
}

.item {
  position: relative;
  span {
    position: absolute;
    right: 36px;
    bottom: 16px;
    border-radius: 4px;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
  }
  img {
    padding-right: 30px;
    padding-bottom: 10px;
  }
}

.list {
  li {
    float: left;
  }
}
.clear {
  clear: both;
}
</style>
