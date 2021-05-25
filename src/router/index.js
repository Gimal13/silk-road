import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/Main.vue";


const routes = [
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;