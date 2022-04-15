import Vue from 'vue'

//引入路由插件
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//引入axios库
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

Vue.config.productionTip =false;

//使用路由插件
Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
