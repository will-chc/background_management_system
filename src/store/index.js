import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

//使用vuex插件
Vue.use(Vuex);


//登录信息
const user_Login = {
    namespaced:true,
    state:{
        username:"",
        password:'',
        islogin:false
    },
    //准备action，用于响应组件中的动作
    actions:{
         //检查登录用户名和密码
        loginCheck(context,value){
        //发送axios请求
        //确认登录情况
            if(value === "123"){
                context.commit("LoginCheck",true);
                localStorage.setItem("islogin","true")
            }
            else{
                context.commit("LoginCheck",true);
                localStorage.setItem("islogin","false")
            }

        }
    },
    mutations:{
        LoginCheck(state,value){
            state.islogin = value;
        }
    }
}

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        user_Login
    }
});