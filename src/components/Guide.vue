<template>
  <button @click="add">添加路由</button>
</template>

<script>
export default {
  name:"Guide",
  methods: {
    add(){
      this.$router.addRouter
    }
  },
 
}
</script>

<style>

</style>