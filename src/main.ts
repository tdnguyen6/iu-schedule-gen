import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueAweSomeSwiper from "vue-awesome-swiper";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas);
library.add(far);
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

import "swiper/css/swiper.css";
Vue.use(VueAweSomeSwiper);

new Vue({
  router,
  render: h => h(App),
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      console.log(redirect);
      const split1 = redirect.split("?");
      const path = split1[0];
      const queryString = split1[1];
      const split2: string[] = queryString.split("&");
      const query: {[key: string]: string} = {};
      split2.forEach(pair => {
        const pairArr = pair.split("=");
        query[pairArr[0]] = pairArr[1];
      });
      this.$router.push({path: path, query: query});
    }
  }
}).$mount("#app");
