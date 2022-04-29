//权限 v-permission 自定义指令 按钮级权限
import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const { value } = binding;
    //获取登录角色权限
    let roles = [store.state.user_Login.token];
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;
      //Array.some 判断是否通过预设条件
      //Array.includes 是否含有某个值
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`);
    }
  }
};
