<template>
  <div class="home-slidebar" :class="collapsesWidth">
    <el-aside width="100%">
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
          router:"/page",
           //是否有二级导航
          isSecond: false,
          second: [],
          icon:"el-icon-menu"
        }, 
        // 文档
        {
          title: "文档",
          router:"/document",
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
          router:"/guide",
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
          router:"",
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"页面权限",
              router:"/permission/pages",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"指令权限",
              router:"/permission/directive",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"角色权限",
              router:"/permission/role",
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
          router:"/icon",
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
          router:"",
          index:nanoid(),
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"选项1",
              router:"/components/first",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"选项2",
              router:"/components/second",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"选项3",
              router:"/components/third",
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
          router:"",
          //是否有二级导航
          isSecond: true,
          second: [
            {
              title:"表1",
              router:"/charts/Tableone",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },
            {
              title:"表2",
              router:"/charts/Tabletwo",
              index:nanoid(),
               //是否有二级导航
              isSecond: false,
            },{
              title:"表3",
              router:"/charts/TableThird",
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
          router:'',
          //是否有二级导航
          index:nanoid(),
          isSecond: true,
          second: [
            {
              title: "菜单1", 
              router:'/router/Menu1',

              index:nanoid(),
              //是否有二级导航
              isSecond: true,
              second:[
                 {
                title: "菜单1-1", 
                router:'/router/Menu1/one',
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

<style>
.home-slidebar {
  width: 200px;
  background-color: rgb(48, 65, 86);
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
.el-menu,.el-aside{
  background-color: rgb(48, 65, 86)!important;
}

</style>