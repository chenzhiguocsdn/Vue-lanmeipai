<template>
  <div>
    <!-- 轮播图 -->
    <Banner :banner="banner"></Banner>
    <!-- 蓝莓酱 -->
    <Lanmei :list="list"></Lanmei>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Lanmei from "./Lanmei.vue";
export default {
  data() {
    return {
      banner: [], // 轮播图数组
      list: [], // 蓝莓数据数组
    };
  },
  components: {
    Banner,
    Lanmei,
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
    // 请求蓝莓数据方法
    getHttp() {
      this.$api.getLanmei({ blueBerryjam_id: 1 }).then((res) => {
        let list = res.data.blueBerryJam;
        for (let i = 0; i < list.length; i++) {
          list[i].img = list[i].img.replace(
            "http://www.wwtliu.com/sxtstu",
            "http://iwenwiki.com/api"
          );
        }
        this.list = list;
      });
    },
  },
};
</script>

<style></style>
