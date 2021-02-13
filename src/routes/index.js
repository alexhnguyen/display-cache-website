import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./routes";

export default function() {
  const router = new VueRouter({
    routes,
    mode: "history",
  });
  return router;
}
