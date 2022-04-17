<template>
<!--二级导航 -->
<div class="sider-bar-item">
     <el-submenu v-if="s_item.isSecond" :index="s_item.index">
    <template slot="title">
     
      <span slot="title">{{ s_item.title }}</span>
    </template>
    <el-menu-item-group>
         <el-menu-item  v-for="(p,i) of s_item.second"
          :key="i"  
          :index="s_item.index">
          <i :class="s_item.icon"></i>
          <span slot="title">{{s_item.title}}</span>
        </el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item  v-if="!s_item.isSecond" :index="s_item.index">
         
          <span slot="title">{{s_item.title}}</span>
        </el-menu-item>
</div>

</template>

<script>

export default {
  name: "SiderBarItem",
  props:["s_item",],
};
</script>

<style>
</style>