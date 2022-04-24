//引入路由插件
import VueRouter from 'vue-router';

//引入组件
import Guide from '..//components/Guide'


const router = new VueRouter({
    //路由
    routes: [
        //Home
        {
            name: 'home',
            path: '/home',
            component: (resolve) => { require(['@/pages/Home'], resolve) },
            meta: { isAurth: true, title: "首页" },
            children: [

                //homepage 首页
                {
                    name: 'page',
                    path: '/page',
                    component: (resolve) => { require(['@//components/404/NotFound'], resolve) },
                    meta: { title: "首页" ,icon:"el-icon-menu"},

                },
                //document 文档
                {
                    name: 'document',
                    path: '/document',
                    component: (resolve) => { require(['@//components/Document/Document'], resolve) },
                    meta: { title: "文档",icon:"el-icon-notebook-1" },

                },
                // guide 引导页
                {
                    name: 'guide',
                    path: '/guide',
                    component: Guide,
                    meta: { title: "引导页" , icon:"el-icon-s-help"},

                },
                // permission 权限测试
                {
                    name: "permission",
                    path: '/permission',
                    meta: { title: "权限测试" },
                    children: [
                        // pages 权限测试\页面权限
                        {
                            name: 'pages',
                            path: '/permission/pages',
                            component: Guide,
                            meta: { title: "页面权限" },

                        },
                        // directive 权限测试\指令权限
                        {
                            name: 'directive',
                            path: '/permission/directive',
                            component: Guide,
                            meta: { title: "指令权限" },

                        },
                        // role 权限测试\角色权限
                        {
                            name: 'role',
                            path: '/permission/role',
                            component: Guide,
                            meta: { title: "角色权限" },

                        },
                    ]
                },

                // icon 图标
                {
                    name: 'icon',
                    path: '/icon',
                    component: Guide,
                    meta: { title: "图标" },
                },
                //  components 组件
                {
                    name: 'components',
                    path: '/components',
                    meta: { title: "组件" },
                    children: [
                        // first 组件\选项1
                        {
                            name: 'first',
                            path: '/components/first',
                            component: Guide,
                            meta: { title: "选项1" },

                        },
                        // second 组件\选项2
                        {
                            name: 'second',
                            path: '/components/second',
                            component: Guide,
                            meta: { title: "选项2" },

                        },
                        // third 组件\选项3
                        {
                            name: 'third',
                            path: '/components/third',
                            component: Guide,
                            meta: { title: "选项3" },

                        },
                    ]
                },
                {
                    name: "Table",
                    path: '/charts',
                    meta: { title: "图表" },
                    children: [
                        // Tableone 图表\表1
                        {
                            name: 'Tableone',
                            path: '/charts/Tableone',
                            component: Guide,
                            meta: { title: "表1" },

                        },
                        // Tabletwo 图表\表2
                        {
                            name: 'Tabletwo',
                            path: '/charts/Tabletwo',
                            component: Guide,
                            meta: { title: "表2" },

                        },
                        // TableThird 图表\表3
                        {
                            name: 'TableThird',
                            path: '/charts/TableThird',
                            component: Guide,
                            meta: { title: "表3" },

                        },
                    ]
                },
                //路由嵌套
                {
                    name: 'router',
                    path: "/router",
                    meta: { title: '路由嵌套' },
                    children: [
                        // Menu1 路由嵌套\菜单1
                        {
                            name: 'Menu1',
                            path: '/router/Menu1',
                            component: Guide,
                            meta: { title: "菜单1" },
                            children: [
                                {
                                    name: 'Menu1_one',
                                    path: '/router/Menu1/onr',
                                    component: Guide,
                                    meta: { title: "菜单1" },
                                }
                            ]

                        },
                    ]
                },
            ],
        },
        //Login
        {
            name: 'login',
            path: '/login',
            component: (resolve) => { require(['@/pages/Login'], resolve) },
            meta: { title: "登录页面" },
        },

    ],

});

function getIntance(_this) {
    router.beforeEach((to, from, next) => {
        if (to.path != '/login') {
            if (localStorage.token) {
                let tag = {
                    title: to.meta.title,
                    current: false,
                    routerName: to.name
                }
                _this.$bus.$emit("getTaglist", tag);
                next();
            }
            else {
                next('/login')
            }
        }
        else {
            next();
        }

    })
}
//重写push 捕获 当前跳转到当前路由的错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//暴露路由器
export { router, getIntance };
