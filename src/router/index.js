
import VueRouter from 'vue-router';

export  default new VueRouter({
    routes:[
        {
            name: "login",
            path: "/login",
            component: (resolve) => {
              require(["@/pages/Login"], resolve);
            },
            meta: { title: "登录页面"},
          }
    ]
})