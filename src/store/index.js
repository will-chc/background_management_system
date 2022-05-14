import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

import booklist from './booklist'

//使用vuex插件
Vue.use(Vuex);


//登录信息
const user_Login = {
    namespaced: true,
    state: {
        role:""
    },
    //准备action，用于响应组件中的动作
    actions: {
        
    },
    mutations: {
        getRole(state, role) {
           state.role = role
        },
        DelToken(state, token) {
            state.token = "";
            localStorage.removeItem('token');
        },
        ShiftRole(state,value){
            state.token = value;
            localStorage.token = value;
        }
    }
}

// 路由信息
const asyncRoutes = {
    namespaced:true,
    state:{
        routes:[       
        ],
        asyncRoute:{

        }
    },
    mutations: {
        InitRoutes(state,value){
            state.routes = value;
        },
        AddRoutes(state,value){
            state.routes.forEach(item=>{
                if(item.name=='permission'){
                    item.children.length = 2;
                    item.children.push(value)
                }
            })
        },
        GetASyncRoute(state,value){
            value.component = (resolve) => { require([`@/components/Permission/${localStorage.token}`], resolve) },
            state.asyncRoute = value;
        },
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

//图书表格数据
const bookTable = {
    namespaced:true,
    state:{
        tableList :booklist
    },
    mutations:{
        ModifyTable(state,value){
            state.tableList.forEach(element => {
                if(element.id == value.id){
                    Object.assign(element,value);
                }
            });
        },
        AddTableElement(state,value){
            console.log(state.tableList[0]);
            state.tableList.unshift(value);
            console.log(state.tableList[0]);

        },
        DeleteElement(state,value){
            let i =0
           state.tableList.forEach(ele=>{
               if(ele.id ===value.id){
                    state.tableList.splice(i,1);
               }
               i++;
           })
        }
        
    }
}


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        user_Login,
        asyncRoutes,
        menuCollapse,
        bookTable,
    }
});