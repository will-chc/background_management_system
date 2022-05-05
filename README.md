# background_management_system

#### 介绍

基于vue2开发的后台管理系统

# 后台管理系统

## 登录

> - 简单的登录页面
> 
> - 用户名采用了简单的长度检测
> 
> - 实现简单    密码的显示和隐藏
> 
> ---
> 
> ##### 登录功能
> 
> - 向服务器发送axios post请求，根据用户密码返回数据
> 
>             数据包含一个token和对应角色的动态路由表
> 
> - 对获取到的动态路由表保存到vuex中，并且注册路由。
> 
> - 将登录信息保存到localstorage中，使用路由守卫beforeEach判断登录状态，没有token数据则跳转回登录页面。
> 
> ---
> 
> ![](C:\Users\wave\AppData\Roaming\marktext\images\2022-05-05-22-55-33-1651762425(1).png)

<img src="file:///C:/Users/wave/AppData/Roaming/marktext/images/2022-05-05-22-57-16-1651762618(1).png" title="" alt="" width="666">

## 侧边栏

> - 使用Element UI 根据vuex 中的路由遍历生成侧边栏，路由对应子路由生成子菜单
> 
> - 并且绑定路由跳转
> 
> - **问题**
> 
>         路由问题，对于单个一级菜单和二级菜单对应的 `<router-view>`相同，
> 
>         <u><mark>单个菜单和二级菜单对应的路由等级要相同</mark></u>
> 
>         在遍历时，一级菜单对应一级路由，二级菜单对应二级路由
> 
>         **<u>使用路由重定向Redirect 将一级菜单对应的一级路由定向到其子二级路由。</u>**
> 
> - **<u>遍历的侧边栏收缩问题</u>**
> 
>     `由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字`
> 
>        折叠时：css将部分span 和div diaplay：none

---

## 头部

> - 侧边栏折叠按钮
> 
>         使用全局事件总线进行通讯，传递数据让侧边栏组件收缩
> 
> - css动画搜索框隐藏和显示
> 
> - 头像
> 
> - 页签
> 
>     面包屑
> 
>         面包屑的生成时通过路由守卫beforeEach，当跳转路由时向页签组件传递页面的title并且在页签数组taglist中检测是否已经存在，存在就将其标为当前，否则添加到页签数组中，根据页签数组遍历生成页签元素，并且绑定相应的路由。绑定router.push
> 
>         删除
> 
>                 从数组中将对应的页签数据删除
> 
> - 在router beforeEach 中实现全局事件总线用于传递数据
>   
>   - 如何获取this
>     
>     - 在router.js文件中定义一个函数，并且导入到入口文件中在vue的beforecreated钩子中调用该函数，并且将this（指向vue实例）以参数的形式传入。

---

## 文档

> - 向服务端发送请求获取文章内容和列表
> 
> - 使用正则将文章的第一行提取出来当做文章的标题
> 
> - 侧边的文章列表切换文章

---

## 图标

> Element UI的图标
> 
> 添加点击事件调用函数将点击的图标title 复制到粘贴板
> 
> - svg图标
>   
>   安装svg-loader，编辑svg组件 调用svg组件

---

## 权限测试

> - 角色权限
>   
>   - 根据登录的角色设定不同的路由表
>   
>   - 登录时获取服务端的动态路由，并且动态注册路由
>   
>   - 将路由存在vuex中
>   
>   - 页面刷新vuex重新初始化会使得动态路由丢失
>     
>     - 在created钩子获取存在localStorage中的登录信息根据登录信息向服务端发起请求获取动态路由
> 
> - 指令权限
>   
>   - 设定自定义指令 实现按钮级别的权限控制
>   
>   - 也可以通过v-if实现权限控制
> 
> - 权限切换按钮
>   
>   - 修改localStorage和vuex中的登录信息，并且更新路由和导航栏
>   
>   - 同时实现指令权限的展示

---

## 路由嵌套

> - 简单的路由嵌套

## 头像上传

> - 使用el-upload
> 
> - 文件数量限制limit
> 
> - 文件类型判断
> 
> - 头像的查看
>   
>   - 使用dialog显示头像放大
> 
> - 头像删除
>   
>   - 将存储上传的filelist中删除对应数据

---

## 文件下载

> - 点击下载按钮向服务端发送请求
> 
> - 服务端打开文档流
> 
> - 设置对应响应头
> 
> - 创建Bolb数据
> 
> - 创建路径
> 
> - 设置下载名称

---

## 富文本

> 使用第三方QuillEditor

---

## 图表

> - 分页
>   
>   - 通过设定的单页数据量和表格数据总量计算出分页的各项数据
>   
>   - 根据页数和单页数据条数检索到当前页面显示的数据，存放到当前显示数组中，修改单页数据条数，从新计算获取页面表格
>   
>   - 编辑
>     
>     - 获取当前行的数据，传入编辑dialog中，修改后将数据返回，修改表格数据
>   
>   - 删除
>     
>     - 将当前行数据从数组中移除
>   
>   - 添加
>     
>     - 获取表格数据最后的id+1
>     
>     - 将数据添加到数组中
> 
> - 使用全局事件总线和vuex进行数据通信

## 首页

> -   使用markdown-it-vue
> 
> - 配置text-loader
> 
> - 引入md文件 
