<template>
  <span class="tag-view-item" :class="currentClass">
      <span>{{title}}</span>
  </span>
</template>

<script>
export default {
    naem:"Tag",
    data() {
        return {
            title:"首页",
            current:true,
        }
    },
    computed:{
        currentClass(){
            if(this.current){
                return "tag-current"
            }else{
                return ""
            }
        }
    }
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
</style>