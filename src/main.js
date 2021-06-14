import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

Vue.config.productionTip = false;


new Vue({
  render: (h) => h(App),
}).$mount("#app");
