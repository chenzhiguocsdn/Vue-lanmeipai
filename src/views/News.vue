<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="要闻" name="first">
        <ul class="list">
          <li v-for="(item, index) in yaowenList" :key="index">
            <img :src="item.imgsrc" alt="" />
            <span class="title"
              ><a :href="item.url">{{ item.title }}</a></span
            >
            <div class="content">
              <span>来源：{{ item.source }}</span>
              <span>时间：{{ item.ptime }}</span>
              <span>评论数: {{ item.commentCount }}</span>
            </div>
            <div class="clear"></div>
          </li>
        </ul>
        <MyPagination @changePage="changePage"></MyPagination>
      </el-tab-pane>
      <el-tab-pane label="国内" name="second">
        <ul class="list">
          <li v-for="(item, index) in gouneiList" :key="index">
            <img :src="item.imgsrc" alt="" />
            <span class="title"
              ><a :href="item.url">{{ item.title }}</a></span
            >
            <div class="content">
              <span>来源：{{ item.source }}</span>
              <span>时间：{{ item.ptime }}</span>
              <span>评论数: {{ item.commentCount }}</span>
            </div>
            <div class="clear"></div>
          </li>
        </ul>
        <MyPagination @changePage="changePageGuonei"></MyPagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { yaowen, guonei } from "../api/type";
import MyPagination from "../components/MyPagination.vue";
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
    // 接收当前页码
    changePage(val) {
      this.$api.getNews(yaowen, val).then((res) => {
        this.yaowenList = res;
      });
      document.documentElement.scrollTop = 0;
    },

    changePageGuonei(val) {
      this.$api.getNews(guonei, val).then((res) => {
        this.gouneiList = res;
      });
      document.documentElement.scrollTop = 0;
    },
  },
  components: {
    MyPagination,
  },
};
</script>

<style lang="less" scoped>
a:link {
  text-decoration: none;
  color: #404040;
}
a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
  color: #404040;
}
.container {
  margin: 5px auto;
  width: 1200px;
}

img {
  float: left;
  width: 140px;
  height: 88px;
  margin-right: 10px;
}

.clear {
  clear: both;
}

.title {
  color: #404040;
  font-size: 20px;
}

.content {
  margin-top: 43.2px;
  font-size: 12px;
  span {
    margin-right: 20px;
    color: #888;
  }
}

li {
  border: 1px solid orange;
  margin-bottom: 10px;
}
</style>
