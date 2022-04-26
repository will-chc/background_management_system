<template>
  <div class="grid">
          <div v-for="item of icons" :key="item">
            <el-tooltip class="icon-item" :content="item" placement="top">
              <div class="icon-container">
                <i :class="item"></i>
                <div class="icon-name">{{item.replace("el-icon-",'')}}</div>
              </div>
            </el-tooltip>
          </div>
        </div>
</template>

<script>
export default {
    name:'IconList',
    data() {
        return {
            icons:[
                'el-icon-platform-eleme',
                'el-icon-eleme',
                'el-icon-delete-solid',
                'el-icon-delete',
                'el-icon-s-tools',
                'el-icon-setting',
                'el-icon-user-solid',
                'el-icon-user',
                'el-icon-phone',
                'el-icon-phone-outline',
                'el-icon-more',
                'el-icon-more-outline',
                'el-icon-star-on',
                'el-icon-star-off',
                'el-icon-s-goods',
                'el-icon-goods',
                'el-icon-warning',
                'el-icon-warning-outline',
                'el-icon-question',
                'el-icon-info',
                'el-icon-remove',
                'el-icon-circle-plus',
                'el-icon-success',
                'el-icon-error',

            ]
        }
    },

}
</script>

<style scoped>
    i{
        font-size: 30px;
    }
    .icon-container{
        text-align: center;
        margin: 20px;
    }
    .icon-name{
        font-size: 14px;
    }
</style>