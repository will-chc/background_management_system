<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

111
<script>
export default {
  name: "App",
  mounted() {
    //挂载时，跳转路由到登录页面
    this.$router.replace({
      path:'/home'
    });
    
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
