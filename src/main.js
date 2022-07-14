import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element";
// 引入 css初始化文件
import "./assets/css/reset.css";
// 导入 api
import api from "./api/index";
// 路由拦截
import "./router/permission.js";
Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
