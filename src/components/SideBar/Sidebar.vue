<template>
    <el-menu 
     mode="vertical"
     :collapse="$store.state.menuCollapse.isCollapse"
    style="width='200px'"
    :default-active="$route.path"
    >
    <SidebarItem></SidebarItem>
    </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem.vue'

export default {
  components: { SidebarItem },
    name:'Sidebar',
}
</script>

<style>
.el-aside,.el-menu{
  background-color: rgb(48, 65, 86);
}
</style>