<template>
    <el-button
    type="primary"
    @click="downLoadFile"
    >DownLoad</el-button>
</template>

<script>
import axios from 'axios'
export default {
    name:'DownLoad',
    methods:{
        downLoadFile(){
            axios({
                url:'http://127.0.0.1:8000/flie/download',
                method:'GET',
                responseType:'blob'
            }).then((res)=>{
                let blob = new Blob([res.data]);
                var url = window.URL.createObjectURL(blob);
            // 创建一个a标签
            var a = document.createElement("a");
            a.href = url;
            a.download = "hello.txt";// 这里指定下载文件的文件名
            a.click();
            // 释放之前创建的URL对象
            window.URL.revokeObjectURL(url);
            }).catch(reason=>{
                console.log(reason);
            })
        }
    }
}
</script>

<style>

</style>