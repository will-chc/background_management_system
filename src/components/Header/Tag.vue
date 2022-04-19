<template>
  <span @click="shiftRoute" class="tag-view-item" :class="currentClass">
      <span>{{tag.title}}</span> 
      <span @click="closeTag" v-if="closeBtn" class="closeButton"><i class="el-icon-error"></i></span>
  </span>
</template>

<script>
export default {
    naem:"Tag",
    data() {
        return {
            
        }
    },
    computed:{
        currentClass(){
            if(this.tag.current){
                return "tag-current"
            }else{
                return ""
            }
        }
    },
    methods:{
        closeTag(){
            this.$bus.$emit("closeTag",this.tag)
        },
        //点击Tag 切换路由
        shiftRoute(){
            //切换路由
            this.$router.push({
                name:this.tag.routerName
            })
        }
    },
    props:["tag","closeBtn"]
}
</script>

<style>
.tag-view-item{
    display: inline-block;
    margin:4px 0px 0px 5px;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    font-size: 12px;
    border: 1px solid #d8dce5 ;
    cursor: pointer;
}
.tag-current{
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
}
.tag-current::before{
    content: "";
    background-color: #fff;
    width: 8px ;
    height:8px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4px;
}
.closeButton{
    margin: 0 4px;
}
</style>