import admin from "./components/admin.vue";
import login from "./components/login.vue";
import landingPage from "./components/landingPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "landingPage",
    component: landingPage,
    path: "/",
  },
  {
    name: "admin",
    component: admin,
    path: "/admin",
  },
  {
    name: "login",
    component: login,
    path: "/login",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
