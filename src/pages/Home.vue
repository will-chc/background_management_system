<template>
  <div class="home-container">
    <div class="side-container" :class="$store.state.menuCollapse.isCollapse?'collapse':''">
    <el-aside>
      <Sidebar></Sidebar>
    </el-aside>
    </div>
   
    <div class="home-content">
        <HomeHeader></HomeHeader>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>

<script>

import HomeHeader from '@/components/Header/HomeHeader.vue';
import Sidebar from '@/components/SideBar/Sidebar.vue';


//引入sidebar组件

export default {
  name: "Home",
  components:{
    HomeHeader,
    Sidebar,
    Document
    },
    created(){
      if(localStorage.token=="admin"){
        
        let newRouteObj =
         {
         name: 'admin权限',
         path: '/permission/a',
         component: (resolve) => { require(['@//components/Document/Document'], resolve) },
         meta: { title: "admin权限" },
       }
        this.$router.addRoute('permission',newRouteObj);

       this.$router.options.routes[0].children.forEach(item=>{
         if(item.name=="permission"){
           item.children.push(newRouteObj)
         }
       })
      }
    }
    
}
</script>

<style scpoed>
.home-container {
  display: flex;
  position: absolute;
  min-width: 100%;
  height: 100%;
  height: 100vh;
}
.side-container{
  width: 210px;
  overflow: auto;
   background-color: rgb(48, 65, 86);

}
.collapse{
  width: 64px;
}
.el-aside{
  width: 100%!important;
}
.home-content {
  flex: 1;
  
}



</style>