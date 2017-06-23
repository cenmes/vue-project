import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex';
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router';
import routes from './router/router';
import stores from './store/store';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
const router=new VueRouter({
    routes
});
const store=new Vuex.Store(stores);
new Vue({
  el: '#app',
  router,
    store,
  render: h => h(App)
});
