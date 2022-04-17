<template>
  <div class="login-container">
    <form>
      <h2>登录页面</h2>
      <div class="form-item">
        <span class="svg-container"><i class="el-icon-user-solid"></i></span>
        <!-- username -->
        <input class="form-input" 
         v-model="username"
         @blur="checkName" 
         type="text" />
        <span class="form-item-end"></span>
      </div>
      <div v-show="u_falg"
          @blur="checkName" 
          class="form-item-erro">用户名格式出错</div>
       <!-- password -->
      <div class="form-item">
        <span class="svg-container"><i class="el-icon-lock"></i></span>
        <input
          class="form-input"
          v-model="password"
          :type="viewable ? 'text' : 'password'"
        />
        <span class="form-item-end" @click="showpassword"
          ><i class="el-icon-view"></i
        ></span>
      </div>
      <button class="form-button" @click='login'>登录</button>
    </form>
    <iframe src="" frameborder="0" name="frameName"></iframe>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      u_falg:false,
      password: "",
     
      viewable: false,
    }
  },
  methods: {
    //显示密码
    showpassword() {
      this.viewable = !this.viewable;
    },
    // 用户名合法验证
    checkName(){
      if(this.username.length<3||this.username.length>10){
          this.u_falg = true;
      }
      else{
          this.u_falg = false
      }
    },
    login(){
      //检验账号和密码
      this.$store.dispatch("loginCheck",true)
      
      //跳转路由
      this.$router.replace({
        name:'home',
        params:{
          usernaem:this.username,
        }
      })
    }
  },
};
</script>

<style scoped>
.login-container {
  position: absolute;
  box-sizing: content-box;
  background-color: #2d3a4b;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
form {
  box-sizing: border-box;
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 120px 40px;
  margin: 0 auto;
  background-color: transparent;
}
h2 {
  padding-bottom: 40px;
  color: #fff;
  text-align: center;
}
.form-item {
  display: flex;
  width: 100%;
  height: 52px;

  margin-bottom: 30px;
  border: 1px solid #fff;
  line-height: 52px;

  border-radius: 6px;
}
.svg-container {
  color: #889aa4;
  flex: 1;
  padding: 0 4px 0 12px;
}
.form-input {
  flex: 13;
  padding: 4px 0;
  background-color: transparent;
  outline: none;
  border: 0px;
}
.form-item-end {
  color: #889aa4;

  flex: 1.5;
  text-align: center;
}
.form-button {
  width: 100%;
  height: 52px;
  color: #fff;
  font-weight: 550;
  background-color: #1890ff;
  border-radius: 8px;
  border: 0;
  font-size: 18px;
}
.form-item-erro{
  color: #ff4949;
  font-size: 12px;
  line-height: 1px;
  position: absolute;
  top: 49%;
}
</style>