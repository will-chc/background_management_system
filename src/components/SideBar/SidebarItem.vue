<template>
  <div class="menu-wrapper">
    <template v-for="item of $router.options.routes">
        <div
            v-if="item.children != null && item.children.length > 1"
            :key="item.path"
          >
            <el-submenu :index="item.path" :key="item.path">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{ item.meta.title }}</span>
                </template>
                <template v-for="child of item.children">
                     <div
                        v-if="child.children != null && child.children.length > 0"
                         :key="child.path"
                        >
                        <el-submenu :index="child.path">
                            <template slot="title">
                                <span>{{child.meta.title}}</span>
                            </template>
                            <template v-for="son of child.children">
                                <router-link 
                                v-if="son.path != null && son.path != ''"
                                :to="child.path + '/' + son.path"
                                :key="son.path">
                                    <el-menu-item :index="son.path">{{son.meta.title}}</el-menu-item>
                                </router-link>
                            </template>
                        </el-submenu>
                    </div>
                    <div v-else :key="child.path">
                        <router-link
                            v-if="child.path!=null&&child.path!=''"
                            :to="child.path"
                            :key="child.path" >
                            <el-menu-item :index="child.path">
                                <span>{{child.meta.title}}</span>
                            </el-menu-item>
                        </router-link>
                        
                    </div>
                </template>
            </el-submenu>
          </div>
          <div v-else :key="item.path">
                         <router-link
                            v-if="item.path!=null&&item.path!=''"
                            :to="item.path"
                            :key="item.path" >
                            <el-menu-item :index="item.path">
                                 <i :class="item.meta.icon"></i>
                                <span>{{item.meta.title}}</span>
                            </el-menu-item>
                        </router-link>
          </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",

};
</script>

<style>
     /*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
    /*隐藏文字*/
    .el-menu--collapse  .el-submenu__title span{
        display: none;
    }
    .el-menu--collapse  .el-menu-item span{
        display: none;
    } 
    /*隐藏 > */
    .el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
        display: none;
    }
   .el-aside{
       overflow: hidden;
   }
</style>