// 引入文件
import axios from 'axios'
import {baseUrl} from '@/config'
import {Toast} from 'vant'

// 基础配置
let service = axios.create({
    baseURL: baseUrl, // url = base api url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

let loading;
// 请求拦截
service.interceptors.request.use(config => {

    // loding动画开启
    loading = Toast.loading({
        duration:10000,
        message:"加载中...",
        forbidClick:true,
    })
    //config.headers['Authorization'] = sessionStorage.getItem('token')
    return config
},error =>{
    console.log(error);
    return Promise.reject(error)
})


// 响应拦截
service.interceptors.response.use(res =>{
    // 清除loading
    loading.clear()
    return Promise.resolve(res)
},error =>{
    loading.clear()
    console.log('err'+error);
    return Promise.reject(error)
})

// 抛出
export default service
