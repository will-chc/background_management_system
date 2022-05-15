import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

import booklist from './booklist'

import request from '../api/request'

//使用vuex插件
Vue.use(Vuex);


//登录信息
const user_Login = {
    namespaced: true,
    state: {
        role:""
    },
    mutations: {
        getRole(state, role) {
           state.role = role
        },
    },
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

//面包屑导航
const tagList = {

    state:{
        visitedView:[
            {
                title: "首页",
                current: true,
                path: "/home",
            }
        ]
    },
    mutations:{
        //添加用户访问过的页面
        addVisitedView(state,view){
            if(state.visitedView.some(v=>v.path ===view.path)) return 
            state.visitedView.push(view)
        },
        //关闭用户访问过的页面
        delVisitedView(state,view){
            for(const [i,v] of state.visitedView.entries()){
                if(v.path === view.path){
                    state.visitedView.splice(i,1);
                    console.log(i);
                    break
                }
            }
        }
    }
}


// 创建并暴露store
export default new Vuex.Store({
    modules: {
        user_Login,
        menuCollapse,
        bookTable,
        tagList
    }
});