/**
 * Created by zz on 2017/4/11.
 */
export default {
    state:{
        userInfo:"",
    },
    mutations:{
        setUserInfo(state,userInfo){
            if (typeof userInfo!=="object"){
                throw new Error("user information must be an Object ");
            }
            state.userInfo=userInfo||"";
        }
    }
}
