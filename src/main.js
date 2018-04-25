import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex';
import 'element-ui/lib/theme-default/index.css'
import "./static/css/iconfont.css"
import VueRouter from 'vue-router';
import routes from './router/router';
import stores from './store/store';
import {path} from "./config/config";
import $ from "./static/js/common";
import ui from './ui';
import clickOutside from "./ui/utils/clickoutside";
Vue.directive("right-click",{
    bind(el, binding, vnode){
        console.log(el,binding,vnode);
        el.addEventListener('mouseup',function (e) {
            if(e.button===2){
                binding.value();
            }
        })
    }
});
Vue.directive("clickoutside",clickOutside);
Vue.use(ui);
// Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.permissions=["login","systemManage","interfaceManage","cp"];
const router=new VueRouter({
    routes
});
window.Vue=Vue;
window.path=path;
window.$=$;
// router.beforeEach((to, from, next) => {
//     let r=to.path.replace(/\//,"");
//     if(r!=="login"){
//         if(!$.getStorage("userInfo")){
//             app.$message("你还没登录哦");
//             next({ path:'/login'});
//         }
//         else {
//             next();
//         }
//     }
//     else {
//         next();
//     }
//     // if (r===""){
//     //     next();
//     // }
//     // if (Vue.permissions.indexOf(r)<0){
//     //     app.$message("抱歉,你没有权限访问该页面");
//     //     next(false);
//     // }
//     // else {
//     //     next();
//     // }
// });
const store=new Vuex.Store(stores);
var app=new Vue({
  el: '#app',
  router,
    store,
  render: h => h(App)
});
