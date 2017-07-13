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
window.Vue=Vue;
Vue.permissions=["login","systemManage","interfaceManage","cp"];
const router=new VueRouter({
    routes
});
// router.beforeEach((to, from, next) => {
//     let r=to.path.replace(/\//,"");
//     // if(r!=="login"){
//     //     if(!Vue.userInfo){
//     //         app.$message("你还没登录哦");
//     //         next({ path:'/login'});
//     //         return;
//     //     }
//     // }
//     if (r===""){
//         next();
//     }
//     if (Vue.permissions.indexOf(r)<0){
//         app.$message("抱歉,你没有权限访问该页面");
//         next(false);
//     }
//     else {
//         next();
//     }
// });
const store=new Vuex.Store(stores);
var app=new Vue({
  el: '#app',
  router,
    store,
  render: h => h(App)
});
