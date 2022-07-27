<template>
  <div class="nav">
    <!-- 导航左侧 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">我的</el-menu-item>
      <el-menu-item index="travel">旅游</el-menu-item>
      <!-- 导航右侧 -->
      <div class="nav-right">
        <el-button v-if="!userinfo.username" size="small" @click="login"
          >登录</el-button
        >
        <template v-else>
          <span>欢迎：{{ userinfo.username }}</span>
          <i class="el-icon-switch-button" @click="loginout"
            ><span class="loginout">退出登录</span></i
          >
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    ...mapMutations("LoginModule", ["clearUser"]),
    handleSelect() {},
    // 登录
    login() {
      this.$router.push("/login");
    },
    // 退出登录
    loginout() {
      // 清除 vuex 中的数据
      this.clearUser();
      // 清除本地数据
      localStorage.removeItem("userinfo");
      //跳转当前的url地址路径
      if (this.$route.path !== "/") {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapState("LoginModule", ["userinfo"]),
  },
};
</script>

<style lang="less" scoped>
.nav {
  background: #545c64;
}
.el-menu-demo {
  width: 1200px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.nav-right {
  float: right;
  line-height: 60px;
  color: #fff;
  span {
    padding-right: 10px;
  }
  i {
    display: inline-block;
    font-size: 20px;
    vertical-align: middle;
    cursor: pointer;
    margin-top: 1px;
  }
}
.loginout {
  display: inline-block;
  height: 20px;
  font-size: 16px;
  margin-left: 8px;
  margin-bottom: 1px;
  line-height: 20px;
}
</style>
