import router from "./index";
import store from "../store/index";
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    let token = store.state.LoginModule.userinfo.token;
    console.log(token);
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
