<template>
  <div class="container">
      <h1>Role:{{role}}</h1>
      <img src="../../../assets/login.gif" alt="">
  </div>
</template>

<script>
export default {
    name:'LoginRole',
    data() {
        return {
            role:this.$store.state.user_Login.token
        }
    },
}
</script>

<style scoped>
    .container{
            background-color: #e3e3e3;
    min-height: 100vh;
    padding: 50px 60px 0;
    }
</style>