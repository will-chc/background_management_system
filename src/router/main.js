//引入路由插件
import VueRouter from 'vue-router';

//引入组件
import Home from '../pages/Home'
import Login from '../pages/Login'

const router = new VueRouter({
    //路由
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },
        {
            name:'login',
            path:'/login',
            component:Login
        },
    ],

});

//暴露路由器
export default router;
