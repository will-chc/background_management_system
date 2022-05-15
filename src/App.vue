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
    //判断是否登录
    let loginPage = {
      name: "login",
      path: "/login",
      component: (resolve) => {
        require(["@/pages/Login"], resolve);
      },
      meta: { title: "登录页面"},
    };
    this.$router.addRoute(loginPage);
    this.isLogin();
  },
  data() {
    return {
      isRouterView: true,
    };
  },
  methods: {
    //检测登录
    isLogin() {
        if (this.$store.state.user_Login.role) {
          // 
          this.$router.push("/");
        } else {
          //跳转到登录页面
          this.$router.push({
            path: "/login",
          });
        }
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
