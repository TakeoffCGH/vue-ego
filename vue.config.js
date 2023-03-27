//配置参数
/**
 * devServer.proxy 
 * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请 求代理到 API 服务器
 */

 const path = require('path')
 const resolve = dir => path.join(__dirname, dir)
 
 module.exports = {
    assetsDir: 'assets',
     //修改打包路径
    publicPath: process.env.NODE_ENV === 'production'? './': '/',
    // 配置@代表src目录
    configureWebpack: {
        name: 'vue Element Admin',
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
      },
    
    //反向代理
    devServer: {
        disableHostCheck: true,
        /*
        open:true,   //作用：用于设置 server 启动后是否自动打开浏览器
        openPage:'/#/',
        */
        // https:true,
        host: '0.0.0.0',
        headers: {
            'X-Custom-Foo': 'bar'
          },

        //开启代理服务器8989，解决axios中ajax跨域问题，从8080跨域到8989(协议名，主机名，端口号)
        proxy: {
            '/': {  //  '/'是axios的get或post请求中的前缀
                target: 'http://localhost:8989/api',  //后端自带的url,8989的path
                // target:process.env.VUE_APP_BASE_URL,//
                ws: true,
                changeOrigin: true,
                pathRewrite:{//重写路径
                    // '^/api':''   //把axios路径的'api'字符过滤掉
                }
            },
        },
    }
   
}