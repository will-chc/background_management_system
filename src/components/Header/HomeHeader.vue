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
      <Tag></Tag>
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
    };
  },
  methods: {
    //点击图标折叠和展开侧边栏
    collapseAside() {
      this.isCollapse = !this.isCollapse;
      this.$store.commit("menuCollapse/Collapse", this.isCollapse);
    },
  }
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

