<template>
  <div class="menu1">
      menu1
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
    name:'RouteNest',
}
</script>

<style scoped>
    .menu1{
        width: 100%;
        margin: 40px;
        background-color:#f4f4f5;
    }
</style>