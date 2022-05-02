<template>
  <div class="file-container">
    <el-form>
      <el-upload
        :limit="limit"
        action
        accept="image/*"
        :on-change="uploadFile"
        list-type="picture-card"
        :auto-upload="false"
        :file-list="fileList"
        :on-exceed="handleExceed"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        ref="upload"
        class="avatar-uploader"
        :class="{ hide: showUpload }"
        :disabled="disabled"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog width="30%" :visible.sync="dialogVisible">
        <img width="100%" :src="imgUrl.url" alt />
      </el-dialog>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "UpLoadImg",
  props: {
    limit: Number,
    fileList: Array,
    disabled: Boolean,
  },
  data() {
    return {
      showUpload: false, //控制limit最大值之后 关闭上传按钮
      dialogVisible: false, //查看图片弹出框
      imgUrl: [], //上传图片后地址合集
    };
  },
  watch:{
      fileList(newName,oldName){
          if (newName.length == this.limit) this.showUpload = true;
            else this.showUpload = false;
      }
  },
  methods: {
      //文件列表中移除文件
      handleRemove(file,flieList){
          const index = this.fileList.findIndex(item=>{
              item ===file.uid
          });
          this.imgUrl.splice(index,1);
          this.$emit('delUrl',this.imgUrl);
          if(this.fileList.length<this.limit){
              this.showUpload = false
          }
      },
      //点击已经上传的文件
      handlePictureCardPreview(file){
          this.imgUrl.url = file.url;
          this.dialogVisible = true;
      },
    //   上传
    submitUpload(){
        // 调用submit方法
        this.$refs.upload.submit();
    },
    // 文件状态改变
    uploadFile(e,flieList){
        //判断上传最大数量限制
        if(flieList.length>=this.limit){
            this.showUpload = true;
        };
        const file = e.raw;
        const size = file.size /1024/1024/2;
        if(
            !(
                file.type ==='image/png'||
                file.type ==='image/gif'||
                file.type ==='image/jpg'||
                file.type ==='image/jpeg'
            )
        ){
            this.$message({
                message:'文件格式必须为png、gif、jpg、jpeg',
                type:'error',
                center:true
            })
        }
        else if (size>2) {
                this.$message({
                     message:'图片大小必须小于2M',
                     type:'error',
                     center:true
                })
            
        }
        else{
            if(this.limit==1){
                this.imgUrl = [];
            };
            const params = new FormData();
            params.append("source",file);
            //上传图片接口的调用
            // uploadImg(params).then(res =>{
            //     if(res.data.status ===1){
            //         this.$message({
            //             message:'上传成功',
            //             type:'success',
            //             center:ture
            //         });
            //         this.imgUrl = res.data
            //         this.$emit('getUrl',this.imgUrl)
            //     }
            //     else{
            //         this.$message({
            //             message:'上传失败',
            //             type:'error',
            //             center:true
            //         })
            //     }
            // })
        }
    },
    //文件超出个数
    handleExceed(file,fileList){
        this.$message({
            message:`最多允许上传${this.limit}张照片`
        })
    }
  },
};
</script>

<style scoped>
.file-container {
  width: 100%;
}
.hide .el-upload--picture-card {
  display: none !important;
}
.avatar-uploader > .el-upload {
  width: 200px;
  height: 200px;
  line-height: 200px;
  border-radius: 0px;
  background: #fff;
  border: 1px dashed #ccc;
}
.avatar-uploader > .el-upload > i {
  font-size: 28px;
  color: #ccc;
}
.avatar-uploader > .el-upload-list {
  display: block;
}
.avatar-uploader > .el-upload-list > .el-upload-list__item {
  width: 200px;
  height: 200px;
  display: block;
}
.avatar-uploader > .el-upload-list > .el-upload-list__item > img {
  width: 200px;
  height: 200px;
  border-radius: 0px;
}
</style>