<template>
  <!-- 一级导航 -->
  <div class="sider-bar-item">
    <el-submenu v-if="item.isSecond" :index="item.index">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </template>
      <el-menu-item-group>
        <Secondnav
          v-for="(i, index) of item.second"
          :key="index"
          :s_item="item.second[index]"
        ></Secondnav>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item
      @click="routeTo(item.router)"
      v-if="!item.isSecond"
      :index="item.index"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import Secondnav from "./Secondnav.vue";
export default {
  name: "SiderBarItem",
  props: ["item"],
  components: { Secondnav },
  methods: {
    routeTo(router) {
      this.$router.push({
        path: router,
      });
    },
  },
};
</script>

<style>

</style>