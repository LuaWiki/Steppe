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
  {
    path: "/editor",
    component: () => import("../layouts/MainLayout.vue"),
    children: [{ path: "CM", component: () => import("../pages/Editor/CM.vue") }],
  },
  {
    path: "/history",
    component: () => import("../layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("../pages/History.vue") }],
  },
];

export default routes;
