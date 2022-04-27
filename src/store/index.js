import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'



//使用vuex插件
Vue.use(Vuex);


//登录信息
const user_Login = {
    namespaced: true,
    state: {
        token: localStorage.getItem("token") ? localStorage.getItem("token") : ""
    },
    //准备action，用于响应组件中的动作
    actions: {
        
    },
    mutations: {
        SetToken(state, token) {
            state.token = token;
            localStorage.setItem("token", token);
        },
        DelToken(state, token) {
            state.token = "";
            localStorage.removeItem('token');
        }
    }
}

// 路由信息
const asyncRoutes = {
    namespaced:true,
    state:{
        routes:[       
        ]
    },
    mutations: {
        AddRoutes(state,value){
            state.routes = value;
        }
    }
   
}

// 导航栏折叠
const menuCollapse = {
    namespaced:true,
    state:{
        isCollapse:false
    },
    mutations:{
        //改变isCollapse
        Collapse(state,value){
            state.isCollapse = value;
        },
    }
}

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        user_Login,
        asyncRoutes,
        menuCollapse,
    }
});