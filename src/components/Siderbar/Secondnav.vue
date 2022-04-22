<template>
  <!--二级导航 -->
  <div class="sider-bar-item">
    <el-submenu v-if="s_item.isSecond" :index="s_item.index">
        <span slot="title">{{ s_item.title }}</span>
      <el-menu-item-group>
        <el-menu-item
          v-for="(p, i) of s_item.second"
          :key="i"
          :index="s_item.index"
        >
          <span slot="title">{{ s_item.title }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item
     v-if="!s_item.isSecond" 
     :index="s_item.index"
     @click="routeTo(s_item.router)"
     >
      <span slot="title">{{ s_item.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "SiderBarItem",
  props: ["s_item"],
  methods:{
    //跳转路由
    routeTo(router){
         this.$router.push({
          path: router,
      });
    }
  }
 
 
};
</script>

<style>
.el-submenu,.el-menu-item,.el-submenu__title{
  color: #fff!important;
}
.el-submenu:hover,.el-menu-item:hover,.el-submenu__title:hover{
  color: #000!important;
}
.el-menu-item.is-active {
    color: #409EFF!important;
}
</style>