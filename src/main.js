import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import routerConfig from "./router/config";
const router = createRouter({
  history: createWebHashHistory(),
  routes: routerConfig,
});

createApp(App).use(router).mount("#app");
