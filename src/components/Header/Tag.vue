<template>
  <div class="tag-view">
    <router-link v-for="(v, i) of visitedView" :key="v.path" :to="v.path">
      <span class="tag-view-item" :class="isActive(v) ? 'tag-current' : ''">
        <span>{{ v.title }}</span>
        <span
          v-if="i !== 0"
          @click.prevent.stop="closeView(v)"
          class="closeButton"
          ><i class="el-icon-error"></i
        ></span>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Tag",
  computed: {
    visitedView() {
      return this.$store.state.tagList.visitedView;
    },
  },
  watch: {
    //监听路由变化
    $route() {
      let { path, meta } = this.$route;
      let viewObj = { path: path, title: meta.title };
      this.addView(viewObj);
    },
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    closeView(view) {
      this.$store.commit("delVisitedView", view);
      if (this.isActive(view)) {
        this.toLastView(this.$store.state.tagList.visitedView);
      }
    },
    toLastView(visitedView) {
      const lastView = visitedView.slice(-1)[0];
      console.log(lastView);
      if (lastView) {
        this.$router.push({
          path: lastView.path,
        });
      }
    },
    //
    addView(view) {
      this.$store.commit("addVisitedView", view);
    },
  },
};
</script>

<style>
.tag-view-item {
  display: inline-block;
  margin: 4px 0px 0px 5px;
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
  font-size: 12px;
  border: 1px solid #d8dce5;
  cursor: pointer;
}
.tag-current {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}
.tag-current::before {
  content: "";
  background-color: #fff;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 4px;
}
.closeButton {
  margin: 0 4px;
}
</style>