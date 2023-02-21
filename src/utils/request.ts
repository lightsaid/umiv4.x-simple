import { extend } from "umi-request"

const request = extend({
    baseURL: "/",
    headers: {},
    timeout: 10000,
})

// 请求拦截
request.interceptors.request.use((url, options)=>{
    let token = localStorage.getItem("access_token")
    if (token) {
        options.headers = {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    }
    return {
        url,
        options
    }
})

// 响应拦截配置
request.interceptors.response.use(async (response, options)=>{
    const result = await response.clone().json();
    console.log("result: ", result);
    if (result.code === 200) {
        return result
    }


})

export default request