/**
 * Created by zz on 2017/4/11.
 */
export default {
    state:{
        showSideMenu:true,//左侧栏菜单显示
        showPersonalPanel:false,//个人面板
        alertTitle:"",//alert标题
        showAlert:false,//显示alert
        routerThree:[],//3级路由
        threeIndex:0,
        dialogVisible:false,//dialog是否显示
        showDepartByList:true,//科室管管理--列表和图片的切换
    },
    mutations:{
        toggleSideMenu:function (state) {
            state.showSideMenu=!state.showSideMenu;
        },
        togglePersonalPanel:function (state) {
            state.showPersonalPanel=!state.showPersonalPanel;
        },
        setAlertTitle:function (state,title) {
            state.alertTitle=title;
        },
        toggleShowAlert:function (state) {
            state.showAlert=!state.showAlert;
        },
        setRouterThree(state,arr){
            state.routerThree=arr;
        },
        setThreeIndex(state,index){
            state.threeIndex=index
        },
        toggleDialog(state){
            state.dialogVisible = !state.dialogVisible;
        },
        toggleDepartMethod(state){
            state.showDepartByList = !state.showDepartByList;
        }
    }
}
