import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./routes";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { setAppStore, getAppStore } from "./lib/appStore";

if(!getAppStore()) {
  setAppStore();
}

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
