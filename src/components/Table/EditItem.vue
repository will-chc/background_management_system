<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose"
  >
    <div class="dialog-header">Edit</div>
    <div class="dialog-body">
      <div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="序号" prop="id">
            <el-input v-model="ruleForm.id" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="时间" prop="date">
            <el-input v-model="ruleForm.date"></el-input>
          </el-form-item>
          <el-form-item label="标题" prop="title">
            <el-input type="textarea" v-model="ruleForm.title"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      isAdd: false,
       ruleForm: {
          id: '',
          date: '',
          title: '',
          author:''
        },
        rules: {
          date: [
            { required: true, message: '输入时间', trigger: 'change' }
          ],
          title: [
            { required: true, message: '请填写标题', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请填作者名', trigger: 'blur' }
          ]
        }
    };
  },
  name: "EditItem",
  props: ["dialogVisible"],
  mounted() {
    // 编辑
     this.$bus.$on('editTable',(row)=>{
        Object.assign(this.ruleForm,row)
      }),
      //添加
    this.$bus.$on("addTable", () => {
      this.isAdd = true;
      this.initForm();
    });
  },
  beforeDestroy(){
    this.$bus.$off('editTable');
    this.$bus.$off('addTable')
  },
    methods: {
    //提交表单
    submitForm() {
        this.$store.commit('bookTable/ModifyTable',this.ruleForm);
      },
      //初始化ruleForm
      initForm(){
        let id = '1';
        this.$store.state.bookTable.tableList.forEach(element => {
            if(element.id>id){
              id = element.id
            }
        });
        id++;
        //对象结构赋值
        this.ruleForm = {id:id,date:'',title:'',author:''};
      },
      //关闭
    handleClose() {
      this.$bus.$emit("closeDialog");
    },
    //取消
    handleCancel() {
      this.$bus.$emit("closeDialog");
    },
    //确认
    handleConfirm() {
      if (this.isAdd) {
        //添加
        //判断表单是否为空
        if(this.ruleForm.date&&this.ruleForm.title&&this.ruleForm.author){
          this.$store.commit('bookTable/AddTableElement',this.ruleForm);
          this.$bus.$emit("closeDialog");
          //刷新表格
          this.$bus.$emit('renewTable');
        }else{
          this.$message({
            message: "The content is not complete",
            type: "error",
            center: true,
      });
        }
      } else {
        // 编辑
          this.submitForm();
          this.$bus.$emit("closeDialog");
      }
    },
  },
};
</script>

<style scoped>
.dialog-header {
  padding: 20px 20px 10px;
}
.dialog-body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
</style>