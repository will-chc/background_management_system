<template>
  <div class="homeHeader">
    <div class="navbar">
      <span @click="collapseAside" class="side-size"
        ><i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i
      ></span>
      <span class="tag">首页</span>
      <div class="right-menu">
        <Search></Search>
        <Avartar></Avartar>
      </div>
    </div>
    <div class="tag-view">
      <Tag
        v-for="(t, index) of taglist"
        :key="index"
        :tag="taglist[index]"
        :closeBtn="index == 0 ? false : true"
      ></Tag>
    </div>
  </div>
</template>

<script>
import Avartar from "./Avartar.vue";
import Search from "./Search.vue";
import Tag from "./Tag.vue";
export default {
  components: { Avartar, Search, Tag },
  name: "HomeHeader",
  data() {
    return {
      isCollapse: false,
      //显示Tag 遍历生成Tag
      taglist: [
        {
          title: "首页",
          current: true,
          routepath: "/home",
        },
      ],
    };
  },
  methods: {
    //点击图标折叠和展开侧边栏
    collapseAside() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit("menuCollapse/Collapse", this.isCollapse);
    },

    //全局通信回调
    //获取新tag 生成新的taglist
    getTaglist(data) {
      if (JSON.stringify(this.taglist).indexOf(JSON.stringify(data)) == -1) {
        this.taglist.forEach((item) => {
          item.current = false;
        });
        data.current = true;
        this.taglist.push(data);
      } else {
        this.taglist.forEach((item) => {
          item.current = false;
          if (item.title == data.title) {
            item.current = true;
          }
        });
      }
      localStorage.setItem('taglist',JSON.stringify(this.taglist));
    },

    //关闭Tag
    closeTag(data) {
      //从taglist 中移除tag
      this.taglist = this.taglist.filter((item) => {
        return item.title != data.title;
      });
      // 切换路由
      this.$router.push({
        path: this.taglist[this.taglist.length - 1].routepath,
      });
    },
  },
  //挂载
  mounted() {
    //从localStorage中获取taglis
    if(localStorage.taglist){
        this.taglist = JSON.parse(localStorage.taglist)
    }
    //全局事件通信
    // 通过路由守卫获取打开的Tag页面数组
    this.$bus.$on("getTaglist", this.getTaglist);

    //获取Tag标签是否被关闭
    this.$bus.$on("closeTag", this.closeTag);
  },
  beforeDestroy() {
    this.$bus.$off("getTaglist");

    this.$bus.$off("closeTag");
  },
};
</script>

<style  scoped>
.homeHeader {
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.navbar {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 0.0625rem 0.25rem rgb(0 21 41 / 8%);
}
.side-size {
  height: 3.125rem;
  line-height: 3.125rem;
  font-size: 1.25rem;
  padding: 0 0.9375rem;
}
.tag {
  font-size: 0.875rem;
  color: #97a8be;
}
.right-menu {
  float: right;
}
.tag-view {
  box-shadow: 0 0.0625rem 0.25rem rgb(0 21 41 / 8%);
  overflow: auto;
}
</style>>

