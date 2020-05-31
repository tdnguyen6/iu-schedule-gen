import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAweSomeSwiper from "vue-awesome-swiper";

Vue.config.productionTip = false;

import "swiper/css/swiper.css";
Vue.use(VueAweSomeSwiper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
