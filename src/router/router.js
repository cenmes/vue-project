/**
 * Created by Administrator on 2017/5/25 0025.
 */
import test from "../components/test.vue";
import systemManage from "../components/systemManage.vue";
import interfaceManage from "../components/interfaceManage.vue"
import cp from "../components/cp.vue";
import login from "../components/login.vue"
export default [{
    path:"/test",
    component:test,
},{
    path:"/systemManage",
    component:systemManage
},{
    path:"/interfaceManage",
    component:interfaceManage
},{
    path:"/cp",
    component:cp
},{
    path:"/login",
    component:login,
}]