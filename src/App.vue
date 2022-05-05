<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterView"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  created() {
    if (localStorage.token) {
      //更新动态路由表
      axios({
        method: "GET",
        url: "http://127.0.0.1:8000/asyncRoute",
        params: {
          user: `${localStorage.token}`,
        },
      }).then((res) => {
        this.$store.commit("asyncRoutes/GetASyncRoute", res.data);
        //配置动态路由
        this.$router.addRoute("permission",this.$store.state.asyncRoutes.asyncRoute);
        // 添加到路由表
        this.$store.commit('asyncRoutes/InitRoutes',this.$router.options.routes);
        this.$store.commit('asyncRoutes/AddRoutes',this.$store.state.asyncRoutes.asyncRoute)
      });
    }
  },
  mounted() {
    this.$router.replace({
      path:'/login'
    })
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterView: true,
    };
  },
  methods: {
    reload() {
      this.isRouterView = false;
      this.$nextTick(() => {
        this.isRouterView = true;
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
