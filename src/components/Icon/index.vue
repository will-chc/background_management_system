<template>
  <div class="icon">
    <div class="header">
      <a href="#" @click="copyMessage">add and use</a>
    </div>
    <div class="cont">
      <div class="tab">
        <el-tabs v-model="activeName" type="card" @click="handleClick">
          <el-tab-pane label="Icon" name="Icon">
              <IconList></IconList>
          </el-tab-pane>
          <el-tab-pane label="Element" name="Element"></el-tab-pane>
        </el-tabs>
        
      </div>
    </div>
  </div>
</template>

<script>
import IconList from './IconList.vue';
export default {
  components: { IconList },
  name: "Icon",
  data() {
    return {
      activeName: "Icon",
    };
  },
  methods: {
    copyMessage() {
      this.$message({
        message: "success copy",
        type: "success",
        center: true,
      });
    },
    handleClick() {},
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
.icon {
  width: 100%;
  background-color: #fff;
}
.icon .header {
  box-sizing: border-box;
  width: 90%;
  height: 44px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 8px 24px;
  background-color: #eef1f6;
  line-height: 44px;
  color: #337ab7;
}
.icon .cont {
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #eef1f6;
}
.tab {
  width: 100%;
  height: 39px;
  /* background-color: #eef1f6; */
}
.el-tabs__item.is-active {
  color: #409eff;
  background-color: #fff;
}
.grid {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
.icon-item {
  margin: 20px;
  height: 85px;
  text-align: center;
  width: 100px;
  float: left;
  font-size: 30px;
  color: #24292e;
  cursor: pointer;
}
</style>