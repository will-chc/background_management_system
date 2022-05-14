//封装请求
import axios from "axios";

const baseUrl = 'http://localhost:8000'
export default (url,method,data) => {
    return axios({
        url:baseUrl+url,
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
              },
        method,
        data
    })
}

