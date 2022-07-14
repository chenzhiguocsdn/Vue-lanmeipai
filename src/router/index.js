import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Home from "../views/Home/Home.vue";
import Layout from "../views/Layout.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";
import Travel from "../views/Travel.vue";
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

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
