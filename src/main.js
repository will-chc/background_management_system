import Vue from 'vue'

//引入路由插件
import VueRouter from 'vue-router'
//引入路由器
import {router,getIntance} from './router/main'

//引入axios库
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import App from './App.vue'

//引入svg-icon
import '@/icons'

//按需引入element ui
import {Form,Icon,Input,FormItem} from 'element-ui'
import {Aside,Menu,Submenu,MenuItemGroup,MenuItem} from 'element-ui'
import {Tabs,TabPane} from 'element-ui'
import {Dropdown,DropdownMenu,DropdownItem,Button} from 'element-ui'
import { Message } from 'element-ui';
import {Tooltip} from 'element-ui'
import {Table} from 'element-ui'
import {TableColumn} from 'element-ui'
import {Popover} from 'element-ui'
import {Tag} from 'element-ui'
import {Pagination,Card} from 'element-ui'





//引入eleui 的方法
//Table
Vue.component(Table.name,Table);
Vue.component(TableColumn.name,TableColumn);
Vue.component(Popover.name,Popover);
Vue.component(Tag.name,Tag);
Vue.component(Pagination.name,Pagination);
Vue.component(Card.name,Card);


Vue.prototype.$message = Message;
Vue.component(Tooltip.name,Tooltip);
Vue.component(Tabs.name,Tabs);
Vue.component(TabPane.name,TabPane);
Vue.component(Icon.name,Icon);
Vue.component(FormItem.name,FormItem);
Vue.component(Input.name,Input);
Vue.component(Form.name,Form);
Vue.component(Aside.name,Aside);
Vue.component(Menu.name,Menu);
Vue.component(Submenu.name,Submenu);
Vue.component(MenuItemGroup.name,MenuItemGroup);
Vue.component(MenuItem.name,MenuItem);
Vue.component(DropdownMenu.name,DropdownMenu);
Vue.component(DropdownItem.name,DropdownItem);
Vue.component(Button.name,Button);
Vue.component(Dropdown.name,Dropdown);



Vue.config.productionTip =false;

//使用路由插件
Vue.use(VueRouter);

//引入store vuex
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,//路由器
  store,
  beforeCreate() {
    //安装全局事件总线
    Vue.prototype.$bus = this;
    getIntance(this);
    
},
  
}).$mount('#app')
