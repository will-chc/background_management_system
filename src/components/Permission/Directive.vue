<template>
  <div class="directive-container">
      <div class="title">你的权限是['{{role}}'']</div>
      <div class="shiftrole">切换权限:
          <el-radio-group v-model="role">
            <el-radio-button label="login"></el-radio-button>
            <el-radio-button label="admin"></el-radio-button>
          </el-radio-group>
      </div>
        <div class="look">
            <div class="role-item" style="margin-top:30px">Only  <span class="role-class" v-permission="[role]">{{role}}</span> Can see this</div>
            <span class="tag">v-premisson="['{{role}}']"]</span>
            <br/>
            <div class="role-item" style="margin-top:30px" v-permission="['admin','login']">Both Can see this</div>
            <span class="tag">v-premisson="['admin','login']"]</span>
        </div>
  </div>
</template>

<script>
import permission from '../../directives/permission'
export default {
    name:'Directive',
    data() {
        return {
            role:'login'
        }
    },
    watch:{
        role(newValue ,oldValue){
            this.$store.commit('user_Login/ShiftRole',newValue)
        }
    },
    directives:{
        permission
    },
}
</script>

<style scoped>
   .directive-container{
       width:100%;
   }
   .title,.shiftrole{
       margin: 20px;
   }
   .look{
       margin: 40px;
   }
   .role-item{
       width: 320px;
       display: inline-block;
       height: 40px;
       line-height: 40px;
       color: #67c23a;
       background-color: #f0f9eb;
   }
   .role-class{
       margin-top: 6px;
       height: 28px;
       line-height: 24px;
       color: #1890ff;
       background-color: #d1e9ff;
       display: inline-block;
       border-radius:4px;
   }
   .tag{
       margin-left:60px ;
       height: 40px;
       line-height: 40px;
       color: #909399;
       background-color: #f4f4f5;
       border: 1px solid #e9e9eb;
       display: inline-block;
       border-radius:4px;
   }
</style>