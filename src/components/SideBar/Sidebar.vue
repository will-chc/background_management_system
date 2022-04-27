<template>
    <el-menu 
     mode="vertical"
     :collapse="$store.state.menuCollapse.isCollapse"
    style="width='200px'"
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

</style>