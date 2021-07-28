import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("@/views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;