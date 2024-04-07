import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConfView from "../views/ConfView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/conf", name: "conf", component: ConfView },
  ],
});
export default router;
