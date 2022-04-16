import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

//使用vuex插件
Vue.use(Vuex);

//准备action，用于响应组件中的动作
const actions = {

    //检查登录用户名和密码
    loginCheck(context,value){
        //发送axios请求

        //确认登录情况
        context.commit("LoginCheck",value);
        

    }

}

//准备mutations，用于操作数据
const mutations ={
    LoginCheck(state,value){
        state.islogin = value;
    }
}

//state 用于存储数据
const state = {
    username:"",
    password:'',
    islogin:false

}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
});