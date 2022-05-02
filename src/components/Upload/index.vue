<template>
  <div>
    <el-form>
      <el-form-item label="上传图片">
        <UpLoadImg
          :limit="1"
          :fileList="fileList"
          @getUrl="getUrl($event)"
          @delUrl="delUrl($event)"
          :disabled="false"
          
        ></UpLoadImg>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import UpLoadImg from "./UpLoadImg";

export default {
  name: "UpLoadFile",
  components: {
    UpLoadImg,
  },
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    getUrl(getUrl) {
      console.log(getUrl);
    },
    getUrl(delUrl) {
      console.log(delUrl);
    },
  },
};
</script>

<style>
</style>