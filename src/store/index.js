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

//路由信息
// const asyncRoutes = {
//     namespaced:true,
//     state:{
//         routers:[       
//             // permission 权限测试
//             {
//                 name: "permission",
//                 path: '/permission',
//                 meta: { title: "权限测试" },
//                 children: [
//                     // pages 权限测试\页面权限
//                     {
//                         name: 'pages',
//                         path: '/permission/pages',
//                         component: Guide,
//                         meta: { title: "页面权限" },
    
//                     },
//                     // directive 权限测试\指令权限
//                     {
//                         name: 'directive',
//                         path: '/permission/directive',
//                         component: Guide,
//                         meta: { title: "指令权限" },
    
//                     },
//                     // role 权限测试\角色权限
//                     {
//                         name: 'role',
//                         path: '/permission/role',
//                         component: Guide,
//                         meta: { title: "角色权限" },
    
//                     },
//                 ]
//             },
    
//         ]
//     },
   
// }

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        user_Login
    }
});