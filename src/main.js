import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import global from "./assets/sass/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  global,
  render: (h) => h(App),
}).$mount("#app");
