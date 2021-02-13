import Vue from "vue";
import App from "./App.vue";
import getRoute from "./routes/index";

Vue.config.productionTip = false;

const router = getRoute();
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
