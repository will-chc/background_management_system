// //引入路由插件
// import VueRouter from 'vue-router';

// //引入组件
// import Guide from '..//components/Guide'

// //
// import nestedRoute from './modules/nestedRoute'

// const routeLink = [
//     '/'
// ]

// const router = new VueRouter({
//     //路由
//     routes: [
//         //Home
//         {
//             path: '/',
//             redirect:'/home',
//             component: (resolve) => { require(['@/pages/Home'], resolve) },
//             meta: { isAurth: true, title: "首页",icon:"el-icon-menu" },
//             children: [
//                 //homepage 首页
//                 {
//                     name: 'page',
//                     path: '/home',
//                     component: (resolve) => { require(['@//components/Explain'], resolve) },
//                     meta: { title: "首页"},

//                 },

//             ],
//         },
//          //document 文档
//          {
//             path: '/document',
//             redirect:'/document/index',
//             component: (resolve) => { require(['@/pages/Home'], resolve) },
//             meta: { title: "文档",icon:"el-icon-notebook-1" },
//             children: [
//                 {
//                     path: '/document/index',
//                     component: (resolve) => { require(['@//components/Document/Document'], resolve) },
//                     meta: { title: "文档"},
//                 },
//             ],
//         },
//         // icon 图标
//         {
//             path: '/icon',
//             component: (resolve) => { require(['@/pages/Home'], resolve) },
//             redirect:'/icon/index',
//             meta: { title: "图标",icon:'el-icon-s-opportunity' },
//             children: [
//                 {
//                     path: '/icon/index',
//                     component: (resolve) => { require(['@/components/Icon/Icon'], resolve) },
//                     meta: { title: "图标"},
//                 },
//             ],
//         },
//          // permission 权限测试
//         {   
//             name:'permission',
//             path: '/permission',
//             meta: { title: "权限测试",icon:"el-icon-s-custom"},
//             component: (resolve) => { require(['@/pages/Home'], resolve) },
//             children: [
//                 // pages 权限测试\页面权限
//                 { 
//                     path: '/permission/pages',
//                     meta: { title: "页面权限" },

//                 },
//                 // directive 权限测试\指令权限
//                 {
//                     path: '/permission/directive',
//                     component: (resolve) => { require(['@/components/Permission/Directive'], resolve) },
//                     meta: { title: "指令权限" },

//                 },
//             ]
//         },
//          //路由嵌套
//          nestedRoute,
//            //  components 组件
//         {
//             name: 'components',
//             path: '/components',
//             component: (resolve) => { require(['@/pages/Home'], resolve) },
//             meta: { title: "组件", icon:"el-icon-bangzhu" },
//             children: [
//                 // first 组件\选项1
//                 {
//                     name: 'upload',
//                     path: '/components/upload',
//                     component: (resolve) => { require(['@/components/Upload'], resolve) },
//                     meta: { title: "上传头像" },

//                 },
//                 // second 组件\选项2
//                 {
//                     name: 'download',
//                     path: '/components/download',
//                     component: (resolve) => { require(['@/components/DownLoad'], resolve) },
//                     meta: { title: "下载文件" },

//                 },
//                 // third 组件\选项3
//                 {
//                     name: 'tinymce',
//                     path: '/components/tinymce',
//                     component: (resolve) => { require(['@/components/QuillEditor'], resolve) },
//                     meta: { title: "富文本" },

//                 },
//             ]
//         },
//         //Table
//         {
//             name: "Table",
//             path: '/charts',
//             component: (resolve) => { require(['@/pages/Home'], resolve) },
//             meta: { title: "图表",icon:"el-icon-tickets" },
//             children: [
//                 // Tableone 图表\表1
//                 {
//                     name: 'Tableone',
//                     path: '/charts/Tableone',
//                     component: (resolve) => { require(['@/components/Table/List'], resolve) },
//                     meta: { title: "图书表格" },

//                 },
//                 // Tabletwo 图表\表2
//                 {
//                     name: 'Tabletwo',
//                     path: '/charts/Tabletwo',
//                     component: (resolve) => { require(['@/components/Table/List'], resolve) },
//                     meta: { title: "表2" },

//                 },
//             ]
//         },
//         //Login
//         {
//             name: 'login',
//             path: '/login',
//             component: (resolve) => { require(['@/pages/Login'], resolve) },
//             meta: { title: "登录页面", isHidden:true },
//         },

//     ],

// });

// function getIntance(_this) {
//     //路由守卫
//     router.beforeEach((to, from, next) => {

//         // if (to.path != '/login') {
//         //     if (localStorage.token) {
//         //         let tag = {
//         //             title: to.meta.title,
//         //             current: false,
//         //             routepath: to.path
//         //         }
//         //         _this.$bus.$emit("getTaglist", tag);
//         //         next();
//         //     }
//         //     else {
//         //         next('/login')
//         //     }
//         // }
//         // else {
//         //     next();
//         // }

//     })
// }
// //重写push 捕获 当前跳转到当前路由的错误
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

// //暴露路由器
// export { router, getIntance };
