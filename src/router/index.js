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
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/news",
        name: "News",
        component: News,
      },
      {
        path: "/travel",
        name: "Travel",
        component: Travel,
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
