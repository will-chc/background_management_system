<template>
  <div class="home-slidebar" :class="collapsesWidth">
    <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
      <el-menu :collapse="isCollapse">
        <SiderBarItem 
        v-for=" (i,index) of nav" 
        :key="index" 
        :item="nav[index]">
        </SiderBarItem>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import SiderBarItem from './SiderBarItem'
//引入nanoid 
import {nanoid} from 'nanoid'
export default {
  components:{SiderBarItem},
  name: "HomeSideBar",
  data() {
    return {
      //导航栏数据
      nav: [
        //首页
        {
          title: "首页",
          index:nanoid(),
           //是否有二级导航
          isSecond: false,
          second: [],
          icon:"el-icon-menu"
        }, 
        // 文档
        {
          title: "文档",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-notebook-1"
        },
        // 引导页
        {
          title: "引导页",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-s-help"
        },
        // 权限测试页
        {
          title: "权限测试页",
          index:nanoid(),
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"页面权限",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"指令权限",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"角色权限",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
          ],
          icon:"el-icon-s-help"
        },
        // 图标
        {
          title: "图标",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-info"
        },
        //组件
        {
          title: "组件",
          index:nanoid(),
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"选项1",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"选项2",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"选项3",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
          ],
          icon:"el-icon-menu"
        },
         //图表
        {
          title: "图表",
          index:nanoid(),
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"选项1",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"选项2",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"选项3",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
          ],
          icon:"el-icon-menu"
        },
        //路由嵌套
         {
          title: "路由嵌套",
          //是否有二级导航
          index:nanoid(),
          isSecond: true,
          second: [
            {
              title: "菜单1", 
              index:nanoid(),
              //是否有二级导航
              isSecond: true,
              second:[
                 {
                title: "菜单1-1", 
                index:nanoid(),
                //是否有二级导航
                isSecond: false,
              }
              ]
            },
          ],
          icon:"el-icon-menu"
        },
          //Table
        {
          title: "Table",
          index:nanoid(),
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"选项1",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"选项2",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"选项3",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
          ],
          icon:"el-icon-notebook-2"
        },
         //Table
        {
          title: "Table",
          index:nanoid(),
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"选项1",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"选项2",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"选项3",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
          ],
          icon:"el-icon-notebook-2"
        },
          // 文档
        {
          title: "文档",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-notebook-1"
        },  // 文档
        {
          title: "文档",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-notebook-1"
        },  // 文档
        {
          title: "文档",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-notebook-1"
        },  // 文档
        {
          title: "文档",
          index:nanoid(),
          //是否有二级导航
          isSecond: false,
          second: [
          ],
          icon:"el-icon-notebook-1"
        },

      ],
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