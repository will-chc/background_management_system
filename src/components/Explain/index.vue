	<template>
  <div class="markdown_wrapper_content">
    <div class="markdown_area area">
      <markdown-it-vue class="md-body" :content="content" />
    </div>
  </div>
</template>
<script>
import MarkdownItVue from "markdown-it-vue";
import documentation from "../../assets/Explain.md";
import "markdown-it-vue/dist/markdown-it-vue.css";
export default {
  components: { MarkdownItVue },
  data() {
    return {
      content: documentation,
    };
  },
};
</script>
<style scoped>
  .markdown_wrapper_content{
    height:86vh;
    margin: 40px 100px;
    overflow: scroll;
  }
</style>
