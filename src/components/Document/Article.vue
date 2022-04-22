<template>
  <div class="article">
    <div class="title"><h1 class="">{{title}}</h1></div>
    <div class="cont">
      <p>
      {{content}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Artcle',
  data() {
    return {
      title:"",
      content:'',
      baseurl:"http://127.0.0.1:8000/"
    }
  },
  methods:{
    updataArticle(title){
      
      axios({
      method:'GET',
      url:this.baseurl+title
    }).then((res)=>{
      const reg = /\s*.*\s/;
      this.title = reg.exec(res.data)[0];
      this.content = res.data.replace(this.title,"");
    })
    }
  },
  created() {
    //发送axios获取文章
    axios({
      method:'GET',
      url:'http://127.0.0.1:8000/vue-admin'
    }).then((res)=>{
      const reg = /\s*.*\s/;
      this.title = reg.exec(res.data)[0];
      this.content = res.data.replace(this.title,"");
    })
  },
  mounted() {
    //更新文章
    this.$bus.$on('updataArticle',this.updataArticle)
  },
};

</script>

<style scoped>
p {
  word-break: normal;
  white-space:pre-wrap;
  font-family: 微软雅黑,Arial, Helvetica, sans-serif;
  font-weight: 400;
}
.article{
  position: relative;
}
.title{
  margin:60px 0 30px;
  padding:26px 0;
}
.title::before{
  display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    content: "";
    width: 344px;
    height: 3px;
}
.cont{
  padding-bottom: 80px;
}
.cont::after{
  display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #000;
    content: "";
    width: 344px;
    height: 3px;
}

</style>
