## 后台管理系统
  某个个后台管理系统，包含商品管理 用户管理 订单等等信息。 

前端开发内容：
    PC端(比如:京东)  移动端(手机预览的网页)  小程序  后台管理界面  

后台开发：
    服务器： 后台语言 java、 php、 python 、大数据、人工智能 

架构师： --- 技术总监 

前后端分离：
    用户 --- >前端-视图-数据---->后台-提供接口 ---> 数据库  

## 技术点
    Vuejs + nodejs + Vue-router  + Vuex + Element-ui + Axios  + Echarts + 其他三方库


## 项目搭建
1. vue create vue-ego 
2. vue-router vuex 
3. axios 
4. vue add element --(按需)


## 项目初始化
1. 删除无用的组件 home.vue about.vue hello... 
2. css初始化  
3. incofont 图标导入


## 后台服务
1. node.js服务  
2. express 
3. jwt（生成token）jsonwebtoken   解析token: 安装： jwt-decode 
4. mysql
5. mockjs  -- 模拟数据 
   1. 安装： cnpm i mockjs -S 
   2. 引入： 
      node.js: const Mock = require('mockjs')
      前端js:  import Mock from 'mockjs'

    3. 语法：
       Mock.mock() 


## 路由大配置
1. 页码布局配置 同级登录界面


## 商品管理界面 


### 类目选择


### 上传图片
1. upload 图片上传
2. 后台配置
   1. 后台安装 multer 模块   同时引入fs模块
   2. router.js入口文件导入模块
       const fs=require('fs')
        const multer=require('multer')
   3. 上传图片 配置upload

### 富文本编辑
1. 百度编译器
2. wangEditor 

wangEditor使用步骤：
1. 官网网址：https://www.wangeditor.com/doc/ 
2. 基本使用
    1. 安装：npm i wangeditor --save 
    2. 引入模块：
       import E from "wangeditor"
    3. 使用wangeditor
        const editor = new E("#div1")
        editor.create()

3. 常用配置
    1. 清空内容
         editor.txt.clear() 清空编辑器内容。

    2. 设置内容
         editor.txt.html('') 获取 html 

    3. 配置菜单
       1. 配置菜单使用 editor.config.menus 定义显示哪些菜单和菜单的顺序
    
    4. 配置 onchange 回调函数 
       配置 onchange 函数之后，用户操作（鼠标点击、键盘打字等）导致的内容变化之后，会自动触发 onchange 函数执行


## 国际化

### vuei8n 
1. 介绍：
   Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。

2. 安装
   1. npm install vue-i18n
   2. main.js导入或者是单独的文件
        import Vue from 'vue'
        import VueI18n from 'vue-i18n'

        Vue.use(VueI18n)


3. 使用步骤
   1.  如果使用模块系统 (例如通过 vue-cli)，则需要导入 Vue 和 VueI18n ，然后调用 Vue.use(VueI18n)。
        // import Vue from 'vue'
        // import VueI18n from 'vue-i18n'
        //
        // Vue.use(VueI18n)
    2. 准备翻译的语言环境信息
      
      
        ```js
        const messages = {
                en: {//英文
                    home: {
                        hello: 'hello world',
                        xx:xx,
                ...
                    },
                    goods:{}
            },
            zh: {//中文
                home: {
                    hello: '你好 世界',
                    xx:xx,
                    ...
                },
                goods:{
                    
                }
            }
        }
        ```
    3.  通过选项创建 VueI18n 实例
        const i18n = new VueI18n({
            locale: 'en', // 设置地区
         messages, // 设置地区信息
        })
   
    4.  通过 `i18n` 选项创建 Vue 实例
        new Vue({ i18n }).$mount('#app')


    5. 使用语法：
       <p>{{ $t("home.hello") }}</p>

### element 国际化

https://kazupon.github.io/vue-i18n/zh/started.html#javascript

1. 导入
     import Element from 'element-ui'

2. 导入语言环境
    import enLocale from 'element-ui/lib/locale/lang/en'
    import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

    目前 Element 内置了以下语言：
        简体中文（zh-CN）
        英语（en）
        德语（de）
        葡萄牙语（pt）
        西班牙语（es）
        丹麦语（da）
        法语（fr）
        ... 

3. 配置语言环境
  
   ```js 
   const messages = {
        en: {
            message: 'hello',
            ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
        },
        zh: {
            message: '你好',
            ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
        }
    }
   ```
   
   


4. 配置使用
    Vue.use(Element, {
        i18n: (key, value) => i18n.t(key, value)
    })


## 登录--路由拦截



## echarts 
1. 安装：npm install echarts -S
2. 使用方式
   1. 导入echarts在组件内使用
   2. 导入全局 挂载原型上 全局使用
   3. 开发成vue插件 


3. 使用 -main.js
   1. import * as echarts from 'echarts'
        Vue.prototype.$echarts = echarts;

    2. 直接使用
       this.$echarts.xxx


## 规格参数



## 订单列表



## vue-PDF
参考：gitHub： https://github.com/FranckFreiburger/vue-pdf

步骤：
1. npm install --save vue-pdf
2. import pdf from 'vue-pdf'
3.  components: {
    pdf
    }
4.  <pdf src="./static/relativity.pdf"></pdf>


问题：
    pdf打印的时候 看到视图  乱码的中文

vue-pdf网址:https://github.com/FranckFreiburger/vue-pdf/pull/130/commits/253f6186ff0676abf9277786087dda8d95dd8ea7


## 下载图片
1. window.location.href='url' (下载文件)

2. 下载图片
    ```
        down() {
            var alink = document.createElement("a");
            alink.href = this.imgUrl;
            console.log(this.imgUrl);
            alink.download = "pic"; //图片名
            alink.click();
        },

    ```

## VUE项目实现表格导出EXCEL表格 
1. 安装 -- 使用npm安装：
    npm install file-saver xlsx -S
    npm install script-loader -D

2. 在/src目录下新建一个excel（名字也可自取）文件夹，存入Blob.js和Export2Excel.js文件
3. 在common文件夹里新建js文件夹再新建util.js
   ```
     export function export2Excel(columns,list){
        require.ensure([], () => {
            const { export_json_to_excel } = require('../../excel/Export2Excel');
            let tHeader = []
            let filterVal = []
            console.log(columns)
            if(!columns){
                return;
            }
            columns.forEach(item =>{
                tHeader.push(item.title)
                filterVal.push(item.key)
            })
            const data = list.map(v => filterVal.map(j => v[j]))
            export_json_to_excel(tHeader, data, '数据列表');
        })
    }
   ```

4. 在vue项目中的使用 --- 在需要的页面import引入
   import { export2Excel } from '../../common/js/util'

5. 表头初始化
6. 点击导出


## 项目打包
1. 项目制作：
   1. 原型图 -- 开会研讨 -- 项目周期  --  制作项目-（前端后台）
   2. 团队开发：前后端分离  
      后台接口：
         1. 本地服务接口：192.168.xx.xx/api/xx/xxx 
         2. 测试接口：    192.168.xx.xx/xx/xx 或者 http://xxx/xxx.com 
         3. 线上的接口： http://xxx/xxx 
      如果接口访问受限了cors错误 跨域了
      
   
    反向代理  vue.config.js 
   
       项目发布上线：
      接口资源共享   cors 
   
    3.  团队开发：前端人员（2-3个人）
        1.  项目共享的  同事之间写的项目内容是共享的  功能1 功能2 ... 
     2.  git实现代码管理 
   
    4. 项目打包--项目部署
       1. 手动打包
    2. 自动化部署
   
2. 手动打包
    1. 命令： npm run build  (看一下：package.json)
    2. 后台接口：资源共享
    3. 打包后路径 /xx  希望路径 ./  修改配置  
    4. 配置环境变量


3. 环境变量
   1. 开发环境-研发环境： development 
   2. 线上环境-生产环境： production 
   3. 测试环境：test 


4.  环境变量
    1.  配置项目环境变量：
        1.   npm run serve  环境变量：development 
        2.   npm run build  环境变量：production 
    2.  默认当前项目的环境变量：
        process.env.NODE_ENV 

    3. 请注意，只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中


5. 打包后文件处理
   1. 发送后台人员  部署项目发布 
   2. 开通权限 -- 部署项目 -- 安装软件-链接服务器的域名  -- 每次登录后链接服务--执行命令-发布项目（linux系统）

6. 自动化部署
    1. 项目完善 --  提交仓库 git -- 码云或者gitHub 
    2. 远端仓库更新完毕  项目完毕 -- 进行项目发布 
    3. Jenkins

7. bug系统
   1. 开发项目
   2. 项目完毕后 --- 提交给测试  
   3. 测试通过后 项目发布-线上的 

    软件：
        1. 公司内部测试平台  -- 开通账号和密码
        2. 禅道
        3. jira 




## 项目原型
1. 项目开发：
    周期：2-3个月 （电商：6个月-1年） 
    团队人员：10几个  （7-8个： 2个前端 3个人后台 1技术总监 1个产品经理  1个项目经理 1个测试人员 ）
    开发人员：
        技术总监 -- 项目经理 --- 产品经理  --- ui设计师 --- 前端开发工程师（初级 8k -- 18k） --- 后台 -- 测试人员 --运维人员  

    项目开发：
        开会讨论 --- 分析功能--研发周期 -- 分配-后台-10天 前端-5天--接口联调（postman调接口）

2. 项目开发---原型： 
        1. 原型图的压缩包 --ie -- 谷歌-插件：axure
        2. 在线原型-- 墨刀 

    项目：
        老项目 ---> 迁移到新项目--（jquery）

    项目：
        项目迭代更新  

      
## vue-面试题
1. vue双向数据绑定
2. Vue组件之间数据传递
3. VUE生命周期 做什么？
4. watch computed 区别？ 
5.  vue父子组件生命周期执行顺序 
6.  v-model原理
7.  data为什么是一个函数 
8.  vue-router模式 （路由实现的原理） 
9.  key作用   Diff算法 
10. v-show v-if 


## 项目启动
1. 下载项目到本地    下载命令：git clone 网址地址
2. 下载依赖：cnpm i  （特殊：readme.md）
3.  查看package.json文件  npm start



## axios 二次封装 步骤
1. 导入axios模块
2. 创建axios实例
3. 请求拦截 config处理
4. 响应拦截 error处理
5. 

##  浅析vue cli的webpack配置属性 devServer 详解 和 devServer.proxy 工作原理解析

https://blog.csdn.net/qq_47443027/article/details/125985081

### devServer.proxy 的工作原理
1、proxy 接受一个对象，对象键值对的 key 用来匹配 api 的 url 中的 path。也就是说，当我们进行如下配置时：

```js
module.exports = {
　　proxy: {
　　　　'/api': {
　　　　　　target: 'http://127.0.0.10:3000',
　　　　}
　　}
};
```


devServer 会自动对 path 为 /api 开头的 api 做代理转发。而 path 不是 /api 开头的就不会进行处理。

　　这里需要注意一下 path 与 url 的区别，path 是取  url 里的一部分

2、pathRewrite 属性讲解

　　pathRewrite 接受一个对象。

（1）key：对象键值对中的 key 是一个正则表达式。这里需要注意正则的写法，必须与^开头。熟悉正则表达式的朋友就会知道，这表明，传给 deveServer.proxy 的 api 的 url 必须是以正则表达式所要匹配的字符串开头。

例如：如下配置 pathRewrite: {"^/api" : ""}

现在这样两个 api：http://localhost:80/api/login   和   /api/login，devServe.proxy 匹配哪个？

会匹配第二个，因为第二个以/api开头，而第一个以http开头。

（2）value：对象键的 value 是个字符串，用来替换 key 匹配的字符串

3、pathRewrite 替换的结果

　　有了上面的知识，那我们就可以明白 pathRewrite 的工作原理以及结果是什么

```js
proxy: {
　　'/api': {
　　　　target: 'http://emcs-app:8080/',
　　　　changeOrigin: true,
　　　　pathRewrite: {
　　　　　　'^/api': '/'
　　　　}
　　}
}
```


　比如项目上的配置，本地开发时实际上接口请求是 http://test.modb.cc:8080/api/getUser，path 的 /api 匹配上面的配置就会转发及重写为 http://emcs-app:8080/getUser 这样请求到后台服务去



```

import Vue from "vue"; // 引入Vue
import VueI18n from "vue-i18n"; // 引入国际化的包
// import en from './en.js'
// import zh from './zh.js'
/**/import enLocale from 'element-ui/lib/locale/lang/en' //引入el自带得国际化语言包,防止内部插件出现乱码
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'//引入el自带得国际化语言包,防止内部插件出现乱码
import ElementLocale from 'element-ui/lib/locale'
Vue.use(VueI18n); // 全局注册国际化包


// 准备翻译的语言环境信息
/**/
const i18n = new VueI18n({
    locale: localStorage.getItem('locale')||"zh", // 从cookie中获取语言类型 获取不到就是中文
    messages: {
      'zh': Object.assign(require('./zh.js'), zhLocale) ,   // 中文语言包
      'en': Object.assign(require('./en.js'), enLocale) ,  // 英文语言包
    }
  }); 
   
ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n


// 准备翻译的语言环境信息
/*const messages = {
    en,
    zh
  }
  
  // 通过选项创建 VueI18n 实例
  const i18n = new VueI18n({
    locale: localStorage.getItem('locale'), // 设置地区
    // locale: 'en',
    messages, // 设置地区信息
  })
  export default i18n*/

  

```