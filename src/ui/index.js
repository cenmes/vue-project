import radio from "./radio";
import Alert from "./alert";
const components=[
    radio,
];
function install(Vue) {
    components.forEach(function (component) {
        Vue.component(component.name,component);
    });
    Vue.prototype.$alert=function (msg,title="提示") {
        // var instance=new Vue({
        //     render:h=>{
        //         return h(Alert,{
        //             props:{
        //                 title:title,
        //                 msg:msg
        //             }
        //         })
        //     }
        // });
        var extend=Vue.extend(Alert);
        var instance=new extend();
        instance.msg=msg;
        instance.title=title;
        document.body.appendChild(instance.$mount().$el)
    }
}
export default {
    install
}