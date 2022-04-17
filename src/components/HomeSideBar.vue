<template>
  <div class="home-slidebar" :class="collapsesWidth">
    <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
      <el-menu :collapse="isCollapse">
        <el-menu-item index="1">
          <i class="el-icon-office-building"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">文档</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-s-help"></i>
          <span slot="title">引导页</span>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">权限测试页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">页面权限</el-menu-item>
            <el-menu-item index="4-2">指令权限</el-menu-item>
            <el-menu-item index="4-3">角色权限</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="5">
          <i class="el-icon-info"></i>
          <span slot="title">图标</span>
        </el-menu-item>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title"> 组件</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-menu-item index="6-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span slot="title">图表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">选项1</el-menu-item>
            <el-menu-item index="7-2">选项2</el-menu-item>
            <el-menu-item index="7-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title"
            ><i class="el-icon-s-promotion"></i>
            <span slot="title">路由嵌套</span>
          </template>
          <el-menu-item-group>
            <el-submenu index="8-1">
              <template slot="title">菜单1</template>
              <el-menu-item index="8-1-1">菜单1-1</el-menu-item>
            </el-submenu>
            <el-submenu index="8-2">
              <template slot="title">菜单2</template>
              <el-menu-item index="8-2-1">菜单2-1</el-menu-item>
              <el-menu-item index="8-2-2">菜单2-2</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="9">
          <template slot="title"
            ><i class="el-icon-notebook-1"></i>
            <span slot="title">Table</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="9-1">Table1</el-menu-item>
            <el-menu-item index="9-2">Table2</el-menu-item>
            <el-menu-item index="9-3">Table3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="10">
          <template slot="title"
            ><i class="el-icon-notebook-1"></i>
            <span slot="title">Table</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="10-1">Table1</el-menu-item>
            <el-menu-item index="10-2">Table2</el-menu-item>
            <el-menu-item index="10-3">Table3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title"
            ><i class="el-icon-notebook-1"></i>
            <span slot="title">Table</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="11-1">Table1</el-menu-item>
            <el-menu-item index="11-2">Table2</el-menu-item>
            <el-menu-item index="11-3">Table3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="12">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">文档</span>
        </el-menu-item>
        <el-menu-item index="12">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">文档</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "HomeSideBar",
  data() {
    return {
      isCollapse: false,
    };
  },
  computed:{
    collapsesWidth(){
      if(this.isCollapse){
        return "collapsesWidth"
      }
      else{
        return ""
      }
    }
  },
  methods: {
    hiddenAside(data) {
      this.isCollapse = data;
    },
  },
  mounted() {
    //绑定事件监听导航栏是否收缩
    this.$bus.$on("isCollapse", this.hiddenAside);
  },
  beforeDestroy() {
    //解绑事件监听导航栏是否收缩
    this.$bus.$off("isCollapse");
  },
};
</script>

<style scoped>
.home-slidebar {
  width: 200px;
  background-color: #fff;
  overflow: auto;
}
.el-menu {
  border: 0px;
}
.el-aside {
  overflow: visible;
}
.collapsesWidth{
  width: 64px!important;
}
</style>