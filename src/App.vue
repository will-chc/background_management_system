<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterView"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import request from "./api/request";
export default {
  name: "App",
  created() {
    let loginPage = {
      name: "login",
      path: "/login",
      component: (resolve) => {
        require(["@/pages/Login"], resolve);
      },
      meta: { title: "登录页面"},
    };
    this.$router.addRoute(loginPage);
    //判断是否登录
    this.isLogin();
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
    async isLogin() {
      await request("/user", "GET").then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          //存储用户权限
          this.$store.commit("user_Login/getRole", res.data.role);
          this.$router.push("/");
        } else {
          this.$router.push({
            path: "/login",
          });
        }
      });
    },
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
