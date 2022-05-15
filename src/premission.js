// import request from "./api/request";
import _import from './router/_import_component'
import Layout from './pages/Home.vue'
import router from "./router/index";
import store from './store/index';
import Global from "./global/global"
import request from './api/request';
var getRouter;
let flag
let asyncroute = [
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: "Layout",
        meta: { isAurth: true, title: "首页", icon: "el-icon-menu" },
        children: [
            //homepage 首页
            {
                name: 'page',
                path: '/home',
                component: "/Explain",
                meta: { title: "首页" },

            },

        ],
    },
    //document 文档
    {
        path: '/document',
        redirect: '/document/index',
        component: "Layout",
        meta: { title: "文档", icon: "el-icon-notebook-1" },
        children: [
            {
                path: '/document/index',
                component: "/Document",
                meta: { title: "文档" },
            },
        ],
    },
    // icon 图标
    {
        path: '/icon',
        component: "Layout",
        redirect: '/icon/index',
        meta: { title: "图标", icon: 'el-icon-s-opportunity' },
        children: [
            {
                path: '/icon/index',
                component: "/Icon",
                meta: { title: "图标" },
            },
        ],
    },
    // permission 权限测试
    {
        name: 'permission',
        path: '/permission',
        meta: { title: "权限测试", icon: "el-icon-s-custom" },
        component: "Layout",
        children: [
            // directive 权限测试\指令权限
            {
                path: '/permission/directive',
                component: "/Permission/Directive",
                meta: { title: "指令权限" },

            },
        ]
    },
    //路由嵌
    //  components 组件
    {
        name: 'components',
        path: '/components',
        component: "Layout",
        meta: { title: "组件", icon: "el-icon-bangzhu" },
        children: [
            // first 组件\选项1
            {
                name: 'upload',
                path: '/components/upload',
                component: "/Upload",
                meta: { title: "上传头像" },

            },
            // second 组件\选项2
            {
                name: 'download',
                path: '/components/download',
                component: "/DownLoad",
                meta: { title: "下载文件" },

            },
            // third 组件\选项3
            {
                name: 'tinymce',
                path: '/components/tinymce',
                component: "/QuillEditor",
                meta: { title: "富文本" },

            },
        ]
    },
    //Table
    {
        name: "Table",
        path: '/charts',
        component: "Layout",
        meta: { title: "图表", icon: "el-icon-tickets" },
        children: [
            // Tableone 图表\表1
            {
                name: 'Tableone',
                path: '/charts/Tableone',
                component: "/Table",
                meta: { title: "图书表格" },

            },
            // Tabletwo 图表\表2
            {
                name: 'Tabletwo',
                path: '/charts/Tabletwo',
                component: "/Table",
                meta: { title: "表2" },

            },
        ]
    },
]
let roleRoute = {
    path: '/permission/role',
    component: "/Permission/role",
    meta: { title: "角色权限" },

}
//路由拦截
router.beforeEach((to, from, next) => {
    if (!getRouter) {
        //向后端获取路由
        // 模拟数据
        getRoute(to, next)
    }
    else {
        next();
    }
})
async function getRoute(to, next) {

    await request('/user', "GET").then(res => {
        if (!flag) {
            store.commit('user_Login/getRole', res.data.role)
            if (res.data.role === "admin") {
                asyncroute.forEach(item => {
                    if (item.name === "permission") {
                        item.children.push(roleRoute);
                    }
                })
            }
            flag = true
        }

    }, err => {

    })
    // 存储到vuex中
    getRouter = asyncroute;
    console.log(getRouter);
    //存到localStorage
    routerGO(to, next);

}
function routerGO(to, next) {
    //过滤路由
    getRouter = filterAsyncRoutes(getRouter);
    router.options.routes = getRouter;
    router.addRoutes(getRouter)
    Global.antRouter = getRouter
    next({ ...to, replace: true })
}
//过滤路由
function filterAsyncRoutes(RouterMap) {
    const accessRouterMap = RouterMap.filter(route => {
        if (route.component) {
            if (route.component === 'Layout') {
                route.component = Layout;
            }
            else {
                route.component = _import(route.component)
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRoutes(route.children)
        }
        return true
    })
    return accessRouterMap
}


