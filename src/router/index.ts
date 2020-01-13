import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Marco from "../views/Marco.vue";
import Felix from "../views/Felix.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/marco",
    name: "marco",
    component: Marco
  },
  {
    path: "/Felix",
    name: "Felix",
    component: Felix
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
