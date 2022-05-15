<template>
  <div class="directive-container">
    <div class="title">你的权限是<span class="tit_role">{{ role }}</span></div>
    <div class="look">
      <div class="role-item" style="margin-top: 30px">
        Only
        <span class="role-class" v-permission="[role]">{{ role }}</span> Can see
        this
      </div>
      <span class="tag">v-premisson="['{{ role }}']"]</span>
      <br />
      <img v-permission="[role]" src="../../assets/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="">
      <br />
      <div class="role-item" style="margin-top: 30px">
        Only
        <span class="role-class">normal</span> Can see
        this
      </div>
      <span class="tag">v-premisson="['normal']"]</span>
      <img v-permission="['normal']" src="../../assets/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="">
    </div>
  </div>
</template>

<script>
import permission from "../../directives/permission";
import axios from "axios";
export default {
  name: "Directive",
  computed:{
    role(){
      return this.$store.state.user_Login.role
    }
  },
  watch: {
    role(newValue, oldValue) {
      //切换角色
      this.$store.commit("user_Login/ShiftRole", newValue);
      //更新路由
       if (localStorage.token) {
      //更新动态路由表
      axios({
        method: "GET",
        url: "http://127.0.0.1:8000/asyncRoute",
        params: {
          user: `${localStorage.token}`,
        },
      }).then((res) => {
        this.$store.commit("asyncRoutes/GetASyncRoute", res.data);
        //配置动态路由
        this.$router.addRoute("permission",this.$store.state.asyncRoutes.asyncRoute);
        // 添加到路由表
        this.$store.commit('asyncRoutes/AddRoutes',this.$store.state.asyncRoutes.asyncRoute)
      });
    }
    },
  },
  directives: {
    permission,
  },
};
</script>

<style scoped>
.directive-container {
  width: 100%;
}
.title,
.shiftrole {
  margin: 20px;
}
.tit_role{
  display: inline-block;
  width: 100px;
  height:40px ;
  line-height: 40px;
  text-align: center;
  background-color: #1890ff;
  border-radius: 10px;
  margin-left: 20px;
}
.look {
  margin: 40px;
}
.role-item {
  width: 320px;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  color: #67c23a;
  background-color: #f0f9eb;
}
.role-class {
  margin-top: 6px;
  height: 28px;
  line-height: 24px;
  color: #1890ff;
  background-color: #d1e9ff;
  display: inline-block;
  border-radius: 4px;
}
.tag {
  margin-left: 60px;
  height: 40px;
  line-height: 40px;
  color: #909399;
  background-color: #f4f4f5;
  border: 1px solid #e9e9eb;
  display: inline-block;
  border-radius: 4px;
}
</style>