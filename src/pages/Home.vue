<template>
  <div class="home-container">
    <home-side-bar></home-side-bar>
    
    <div class="home-content">
        <home-header></home-header>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeSideBar from '@/components/Siderbar/HomeSideBar.vue';
import HomeHeader from '@/components/Header/HomeHeader.vue';

//引入sidebar组件

export default {
  name: "Home",
  components:{
      HomeSideBar,
      HomeHeader
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
}
.home-content {
  flex: 1;
  background-color: skyblue;
}


</style>