<template>
  <div class="not-found">
    <div class="http-404">
        <div class="http-pic">
            <img src="../../assets/404.png" alt="">
        </div>
        <div class="unshift">
            <h1>哎呀</h1>
            <p>不能进入这个页面</p>
            <br>
            <el-button @click="backTo" type="primary">返回文档页</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'NotFound',
    methods:{
        backTo(){
            this.$router.push({
                name:'document'
            })
        }
    }
}
</script>

<style scoped>
.not-found{
    width: 100%;;
}
.http-404{
    position: absolute;
    left: 20%;
    top: 20%;
    display: flex;
}
.unshift{
    margin:200px 40px ;
}
img{
    width: 800px;
}
</style>