<template>
  <div class="home-container">
    <div class="side-container">
       <!-- <HomeSideBar></HomeSideBar> -->
    <el-aside>
      <Sidebar></Sidebar>
    </el-aside>
    </div>
   
    <div class="home-content">
        <HomeHeader></HomeHeader>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import HomeSideBar from '@/components/Siderbar/HomeSideBar.vue';
import HomeHeader from '@/components/Header/HomeHeader.vue';
import Sidebar from '@/components/SideBar/Sidebar.vue';

//引入sidebar组件

export default {
  name: "Home",
  components:{
      // HomeSideBar,
      HomeHeader,
    Sidebar
    },
    
}
</script>

<style scpoed>
.home-container {
  display: flex;
  position: absolute;
  width: 210px;
  min-width: 100%;
  height: 100%;
  height: 100vh;
}
.side-container{
  width: 210px;
}
.el-aside{
  width: 210px!important;
}
.home-content {
  flex: 1;
  
}



</style>