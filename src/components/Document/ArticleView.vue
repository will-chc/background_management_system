<template>
   <ul>
       <li v-for="(l ,i) of list"
        :key="i"
        class="view-item"
        @click="isCurrent(l)"><i :class="l.current?'el-icon-arrow-down':'el-icon-arrow-right'"></i>{{l.title}}</li>
   </ul>
</template>

<script>
export default {
    name:'ArticleView',
    data() {
        return {
            list:[
                {
                    title:"vue-admin",
                    current:true
                },
                {
                    title:"news",
                    current:false
                }
            ]
        }
    },
    methods:{
        isCurrent(l){
            this.list.forEach(element => {
                element.current=false;
            });
            l.current=true;
            //发送axios
            // article发送axios请求更新文章
            this.$bus.$emit('updataArticle',l.title)
        }
    
    },
    
}
</script>

<style scoped>
*{
    list-style: none;
}
a{
    text-decoration: none;
    color: inherit;
}
.view-item{
    width: 100%;
    height: 16px;
    margin-top:30px;
    padding-left: 20px;
    cursor: pointer;
}

   
</style>