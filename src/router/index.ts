import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Marco from "../views/Marco/Marco.vue";
import Heroes from "../views/Marco/Heroes.vue";
import Villains from "../views/Marco/Villains.vue";
import Felix from "../views/Felix.vue";
import Philipp from "../views/Philipp.vue";
import G from "../views/G/G.vue";
import GVillains from "../views/G/Villains.vue";

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
    component: Marco,
    children: [
      {
        path: "",
        name: "heroes",
      },
      {
        path: "heroes",
        name: "heroes",
        component: Heroes
      },
      {
        path: "villains",
        name: "villains",
        component: Villains
      }
    ]
  },
  {
    path: "/Felix",
    name: "Felix",
    component: Felix
  },
  {
    path: "/philipp",
    name: "philipp",
    component: Philipp
  },
  {
    path: "/G",
    name: "G",
    component: G,
    children: [
      {
        path: "",
        name: "hereos",
      },
      {
        path: "heroes",
        name: "heroes",
        component: Heroes
      },
      {
        path: "villains",
        name: "villains",
        component: GVillains,
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
