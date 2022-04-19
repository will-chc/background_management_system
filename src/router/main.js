//引入路由插件
import VueRouter from 'vue-router';

//引入组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Document from '..//components/Document'
import Guide from '..//components/Guide'


const router = new VueRouter({
    //路由
    routes:[
        {
            //Home
            name:'home',
            path:'/home',
            component:Home,
            meta:{isAurth:true,title:"首页"},
            children:[

                //homepage 首页
                {
                    name:'page',
                    path:'/page',
                    component:Document,
                    meta:{title:"首页"},

                },
                //document 文档
                {
                    name:'document',
                    path:'/document',
                    component:Document,
                    meta:{title:"文档"},

                },
                // guide 引导页
                {
                    name:'guide',
                    path:'/guide',
                    component:Guide,
                    meta:{title:"引导页"},

                },
                // pages 权限测试\页面权限
                {
                    name:'pages',
                    path:'/permission/pages',
                    component:Guide,
                    meta:{title:"页面权限"},

                },
                // directive 权限测试\指令权限
                {
                    name:'directive',
                    path:'/permission/directive',
                    component:Guide,
                    meta:{title:"指令权限"},

                },
                // role 权限测试\角色权限
                {
                    name:'role',
                    path:'/permission/role',
                    component:Guide,
                    meta:{title:"角色权限"},

                },

                // icon 图标
                {
                    name:'icon',
                    path:'/icon',
                    component:Guide,
                    meta:{title:"图标"},
                },
                // first 组件\选项1
                {
                    name:'first',
                    path:'/components/first',
                    component:Guide,
                    meta:{title:"选项1"},

                },
                // second 组件\选项2
                {
                    name:'second',
                    path:'/components/second',
                    component:Guide,
                    meta:{title:"选项2"},

                },
                // third 组件\选项2
                {
                    name:'third',
                    path:'/components/third',
                    component:Guide,
                    meta:{title:"选项3"},

                },
                 // Tableone 图表\表1
                 {
                    name:'Tableone',
                    path:'/charts/Tableone',
                    component:Guide,
                    meta:{title:"表1"},

                },
                  // Tabletwo 图表\表2
                  {
                    name:'Tabletwo',
                    path:'/charts/Tabletwo',
                    component:Guide,
                    meta:{title:"表2"},

                },
                  // TableThird 图表\表3
                  {
                    name:'TableThird',
                    path:'/charts/TableThird',
                    component:Guide,
                    meta:{title:"表3"},

                },
                 // Menu1 路由嵌套\菜单1
                 {
                    name:'Menu1',
                    path:'/router/Menu1',
                    component:Guide,
                    meta:{title:"菜单1"},
                    children:[
                        {
                            name:'Menu1_one',
                            path:'/router/Menu1/onr',
                            component:Guide,
                            meta:{title:"菜单1"},
                        }
                    ]

                },




            ],
        },
        {
            name:'login',
            path:'/login',
            component:Login,
            meta:{title:"登录页面"},
        },
       
    ],

});
router.beforeEach((to,from,next)=>{

     if(to.meta.isAurth){
        let islogin = localStorage.getItem('islogin');
        islogin = JSON.parse(islogin);
        if(islogin){
            next();
        }else{
            next('/login')
        }
     }
     else{
         next(vm=>{
             console.log(vm);
         });
     }
    
})

function getIntance(_this){
    router.beforeEach((to,from,next)=>{
        if(to.meta.isAurth){
           let islogin = localStorage.getItem('islogin');
           islogin = JSON.parse(islogin);
           if(islogin){
               next();
           }else{
               next('/login')
           }
        }
        else{
            let tag ={
                title:to.meta.title,
                current:false,
                routerName:to.name
            }
            _this.$bus.$emit("getTaglist",tag);
            next();
        }
       
   })
}


//暴露路由器
export {router,getIntance} ;
