import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Home from "../views/Home/Home.vue";
import About from "../views/About.vue";
import News from "../views/News.vue";
import Travel from "../views/Travel.vue";
import Login from "../views/Layout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          isLogin: false,
        },
      },
      {
        path: "/about",
        name: "About",
        component: About,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/news",
        name: "News",
        component: News,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/travel",
        name: "Travel",
        component: Travel,
        meta: {
          isLogin: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes,
});

export default router;
