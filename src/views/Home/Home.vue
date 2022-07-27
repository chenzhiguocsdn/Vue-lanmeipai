<template>
  <div>
    <!-- 轮播图 -->
    <Banner :banner="banner"></Banner>
    <!-- 蓝莓酱 -->
    <Lanmei :list="list"></Lanmei>
    <!-- 分页管理 -->
    <MyPagination @changePage="changePage"></MyPagination>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Lanmei from "./Lanmei.vue";
import MyPagination from "../../components/MyPagination.vue";
export default {
  data() {
    return {
      banner: [], // 轮播图数组
      list: [], // 蓝莓数据数组
      current: 1, // 当前页码
    };
  },
  components: {
    Banner,
    Lanmei,
    MyPagination,
  },
  created() {
    // 获取轮播图数据
    this.$api.getBanner().then((res) => {
      let banner = res.data.banner;
      for (let i = 0; i < banner.length; i++) {
        banner[i].img = banner[i].img.replace(
          "http://www.wwtliu.com/sxtstu",
          "http://iwenwiki.com/api"
        );
      }
      this.banner = banner;
    });
    this.getHttp();
  },
  methods: {
    // 接收当前页码
    changePage(val) {
      this.current = val;
      this.getHttp(this.current);
    },
    // 请求蓝莓数据方法
    getHttp() {
      this.$api.getLanmei({ blueBerryjam_id: this.current }).then((res) => {
        let list = res.data.blueBerryJam;
        for (let i = 0; i < list.length; i++) {
          list[i].img = list[i].img.replace(
            "http://iwen.wiki/sxtstu",
            "http://iwenwiki.com/api"
          );
        }
        this.list = list;
        console.log(this.list);
      });
    },
  },
};
</script>

<style></style>
