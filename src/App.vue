<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

111
<script>
export default {
  name: 'App',
  mounted(){
    //挂载时，跳转路由到登录页面
    this.$router.replace({
      name:'login',
    });
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>
