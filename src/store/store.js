/**
 * Created by zz on 2017/4/11.
 */
const md={
    namespaced:true,
    state:{
        a:"a"
    },
    mutations:{
        setA(state,val){
            state.a=val
        }
    },
    actions:{
        setA(con,val){
            debugger;
                con.commit('setA',con.state.a+","+val.val);
        }
    }
};
export default {
    state:{
        userInfo:"",
        a:"a",
    },
    mutations:{
        setUserInfo(state,userInfo){
            if (typeof userInfo!=="object"){
                throw new Error("user information must be an Object ");
            }
            state.userInfo=userInfo||"";
        },
        setA(state,val){
            state.a=val
        }
    },
    actions:{
        setA(con,val){
            debugger;
            con.commit('setA',con.state.a+","+val.val);
        }
    },
    modules:{
        md
    }
}
