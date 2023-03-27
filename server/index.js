//搭建express服务
const express = require('express')
const app = express()
//post 请求表单数据
app.use(express.urlencoded({ extended: true }))
//资源共享
const cors = require('cors')
app.use(cors())
//静态文件托管（upload暴露公开,8989端口直接访问静态文件） ----  访问：http:localhost:8989/图片.jpg
app.use(express.static('upload'))

//路由
const router = require('./router')

app.use('/api',router)



app.listen(8989,()=>{
    console.log(8989);
})
