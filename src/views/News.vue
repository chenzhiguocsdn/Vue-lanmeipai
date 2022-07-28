<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="要闻" name="first">
        <ul class="list" v-for="(item, index) in yaowenList" :key="index">
          <li>
            <img :src="item.imgsrc" alt="" />
            <span>{{ item.title }}</span>
            <div>{{ item.title }}</div>
            <div class="clear"></div>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="国内" name="second">国内</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { yaowen, guonei } from "../api/type";
export default {
  data() {
    return {
      activeName: "first", // 默认要闻 页面
      yaowenList: [],
      gouneiList: [],
    };
  },
  created() {
    //1. 要闻数据---------------------
    this.$api.getNews(yaowen, 1).then((res) => {
      console.log("要闻数据", res);
      this.yaowenList = res;
    });

    // 2. 国内数据-----------------
    this.$api.getNews(guonei, 1).then((res) => {
      this.gouneiList = res;
      console.log("国内数据", res);
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  margin: 5px auto;
  width: 1200px;
}

img {
  float: left;
  width: 140px;
  height: 88px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.clear {
  clear: both;
}

span {
  color: #404040;
  font-size: 20px;
}
</style>
