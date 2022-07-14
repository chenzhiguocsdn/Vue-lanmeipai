import router from "./index";
// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    let token = "";
    if (token) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
