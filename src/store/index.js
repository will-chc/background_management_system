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

//图书表格数据
const bookTable = {
    namespaced:true,
    state:{
        tableList :[
            {
                id: 1,
                date: "2016-05-02",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              
              },
              {
                id: 2,
                date: "2016-05-04",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              },
              {
                id: 3,
                date: "2016-05-01",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              },
              {
                id: 4,
                date: "2016-05-03",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              },
              {
                id: 5,
                date: "2016-05-02",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              },
              {
                id: 6,
                date: "2016-05-04",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              },
              {
                id: 7,
                date: "2016-05-01",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              },
              {
                id: 8,
                date: "2016-05-03",
                title: "jklasdjfkljdaskf2113",
                author:'王小虎',
              }
        ]
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