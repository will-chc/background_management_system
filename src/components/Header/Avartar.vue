<template>
  <el-dropdown trigger="click" class="avartar-container">
    <div class="el-dropdown-link">
      <div class="user-avartar">
        <img src="../../assets/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="" />
      </div>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item>个人中心</el-dropdown-item>
      <el-dropdown-item class="selfdefind-item">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "Avartar",
};
</script>

<style lang="css" scoped>
.avartar-container {
 
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  overflow: hidden;
  padding: 4px 18px;
  margin-right: 30px;
}

img {
  width: 40px;
  border-radius: 8px;
  overflow: hidden;
}
.el-icon-caret-bottom {
  position: absolute;
  left: 60px;
  top: 28px;
}

.dropdwonmenu {
  z-index: 999;
  width: 80px;
  background-color: skyblue;
}
.selfdefind-item{
    padding-top:10px ;
    border-top:1px solid #e6ebf5 ;
}
</style>>
