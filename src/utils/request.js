/**
 * 封装的axios
 */
import axios from 'axios'
import qs from 'querystring'

/**
 * 错误函数 解析常用的http状态码
 * 2xx：成功
 * 3xx: 重定向
 * 4xx: 资源不存在
 * 5xx：服务器错误
 * 
 */
const  ErrorHandle=(status, info) => {
    switch (status) {
        case 400:
            console.log('400-表示请求报文中存在语法错');
            break;
        case 401:
            console.log('401-未经许可，需要通过HTTP认证');
            break;
        case 403:
            console.log('403-服务器拒绝该次访问（访问权限出现问题）');
            break;
        case 404:
            console.log('404-表示服务器上无法找到请求的资源');
            break;
        case 500:
            console.log('500-表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；');
            break;
        case 503:
            console.log('503-表示服务器暂时处于超负载或正在进行停机维护，无法处理请求');
            break;
        default:
            console.log(info);
            break;
    }
}

//自定义新建一个 axios 实例
const install = axios.create({
    // baseURL:'http://iwenwiki.com',//网络请求的基础路径 
    baseURL:process.env.VUE_APP_BASE_URL,//网络请求的基础路径 
    timeout: 5000,//请求等待时间 时间到了后台没有返回数据 请求中段
})


//拦截器 
// 添加请求拦截器
install.interceptors.request.use(function (config) {
    // console.log('添加请求拦截器',config);
    //处理post请求发送的参数格式
    if(config.method==='post'){
        config.data = qs.stringify(config.data)//{} 转 xx=xx&xx=xx 
    }
    //配置请求token 
    let token= localStorage.getItem('token')
    if(token){
        config.headers.Authorization=token;
    }else{
        return config;
    }
    // console.log('添加请求拦截器--config',config);
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
install.interceptors.response.use(
    response=>response,
    error=>{
        console.log('响应拦截器错误',error);
        let { response } = error;
        // 对响应错误做点什么
        ErrorHandle(response.status,response.info)
  });



export default  install;
