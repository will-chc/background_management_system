<template>
<!-- 一级导航 -->
<div class="sider-bar-item">
     <el-submenu v-if="item.isSecond" :index="item.index">
    <template slot="title">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </template>
    <el-menu-item-group>
         <SiderBarItem
          v-for=" (i,index) of item.second" 
         :key="index" 
         :s_item="item.second[index]"
         ></SiderBarItem>
         <Secondnav
           v-for=" (i,index) of item.second"
           :key="index" 
            :s_item="item.second[index]"
         ></Secondnav>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item  v-if="!item.isSecond" :index="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
</div>

</template>

<script>
import Secondnav from './Secondnav.vue'
export default {
  name: "SiderBarItem",
  props:["item",],
  components:{Secondnav

  }
};
</script>

<style>
</style>