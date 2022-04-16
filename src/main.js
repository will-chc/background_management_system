import Vue from 'vue'

//引入路由插件
import VueRouter from 'vue-router'
//引入路由器
import router from './router/main'

//引入axios库
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import App from './App.vue'


//按需引入element ui

import {Form,Icon,Input,FormItem} from 'element-ui'


Vue.component(Icon.name,Icon);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Form.name,Form);


Vue.config.productionTip =false;

//使用路由插件
Vue.use(VueRouter);

//引入store vuex
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,//路由器
  store
}).$mount('#app')
