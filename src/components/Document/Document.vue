<template>
  <div class="document">
    <div class="blank"></div>
    <div class="document-cont">
      <div class="article-header">
        <p class="header-title">News</p>
      </div>
      <div class="article">
        <div class="article-cont">
           <Article></Article>
        </div>
        <div class="article-view">
          <ArticleView></ArticleView>
        </div>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
import Article from './Article.vue'
import ArticleView from './ArticleView.vue'

export default {
  components: { Article, ArticleView },
  name:"Document",
 
}
</script>

<style lang="css" scoped>
  .document{
    display: flex;
    height: 91.5vh;
    overflow: auto;
  }
  .blank{
    flex: 1;
    background-color: #fff;
  }
  .document-cont{
    flex: 6;
    background-color: #fff;
  }
  .article-header{
    
    /* background-color: #fff; */
    position: relative;
    margin-top: 40px;
    width: 100%;
    font-size: 24px;
    padding-bottom: 22px;
    border-bottom: 1px solid #ccc ;
  }
  
  .header-title::before{
    display: block;
    position: absolute;
    bottom: -1px;
    width: 244px;
    height: 1px;
    background-color: #000;
    content: "";
}
  
 .header-title::after{
   display: block;
   float: right;
   position: absolute;
   bottom:0;
   right:0;
    content: "";
    background-image: url('../../assets/sprite.png');
    background-position: 0 -414px;
    width: 273px;
    height: 78px;
  
  }
 
  .article-cont{
   width: 66.6%;
   float: left;
   padding: 20px;
    
  }
  .article-view{
    float: left;
    width: 21%;
    /* background-color: red; */
    height: 400px;
    margin-left:8% ;
  }
</style>>
