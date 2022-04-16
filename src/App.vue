<template>
  <div id="app">
    <Login v-if="!$store.state.islogin"></Login>
    
  </div>
</template>

<script>
import Login from './pages/Login'
export default {
  name: 'App',
  components: {
   Login
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
</style>
