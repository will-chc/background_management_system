<template>
  <div class="homeHeader">
    <div class="navbar">
      <span @click="collapseAside" class="side-size"
        ><i :class="showicon"></i
      ></span>
      <span class="tag">首页</span>
      <div class="right-menu">
          
        <Avartar></Avartar>
        
       
      </div>
    </div>
  </div>
</template>

<script>
import Avartar from "./Avartar.vue";
import Search from "./Search.vue";
export default {
  components: { Avartar, Search },
  name: "HomeHeader",
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    //导航栏折叠icon
    showicon() {
      if (this.isCollapse) {
        return "el-icon-s-unfold";
      } else {
        return "el-icon-s-fold";
      }
    },
  },
  methods: {
    collapseAside() {
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("isCollapse", this.isCollapse);
    },
  },
};
</script>

<style  scoped>
.homeHeader {
  width: 100%;
  height: 80px;
  background-color: #fff;
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
</style>>

