//封装请求
import axios from "axios";
import router from "@/router";
const baseUrl = 'http://localhost:8000'
//请求拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.token;
        //添加认证请求头认证token是否过期和是否有token
        if (token) {
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    })
// 响应拦截器
axios.interceptors.response.use(
    res => {
        return res;
    },
    err =>{
        console.log("需要重新登录");
        router.push('/login')
        return Promise.reject(err);
    }
)
export default (url,method,data) => {
   return axios({
        url:baseUrl+url,
        method,
        data
    });
}





