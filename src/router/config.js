const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("../pages/Index.vue") }],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("../layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("../pages/Error404.vue") }],
  },
  {
    path: "/login",
    component: () => import("../layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("../pages/Login.vue") }],
  },
];

export default routes;
