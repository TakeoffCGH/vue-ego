//https://kazupon.github.io/vue-i18n/zh/started.html#javascript
import Vue from "vue"; // 引入Vue
import VueI18n from "vue-i18n"; // 引入国际化的包
import en from './en.js'
import zh from './zh.js'
/*import enLocale from 'element-ui/lib/locale/lang/en' //引入el自带得国际化语言包,防止内部插件出现乱码
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'//引入el自带得国际化语言包,防止内部插件出现乱码
import ElementLocale from 'element-ui/lib/locale'*/
Vue.use(VueI18n); // 全局注册国际化包


// 准备翻译的语言环境信息
/*
const i18n = new VueI18n({
    locale: localStorage.getItem('locale')||"zh", // 从cookie中获取语言类型 获取不到就是中文
    messages: {
      'zh': Object.assign(require('./zh.js'), zhLocale) ,   // 中文语言包
      'en': Object.assign(require('./en.js'), enLocale) ,  // 英文语言包
    }
  }); 
   
ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n*/
// 准备翻译的语言环境信息
const messages = {
    en,
    zh
  }
  
  // 通过选项创建 VueI18n 实例
  const i18n = new VueI18n({
    // locale: localStorage.getItem('locale'), 
    //首次才调用，调用给挂靠在main的$i18n中，那里的locale是区别这里的locale，是被赋予的新值(初步结论)
    locale:'zh',// 首次设置地区
    silentFallbackWarnt:true, //为了避免这些警告 (同时保留那些完全没有翻译给定关键字的警告)，需初始化 VueI18n 实例时设置
    messages, // 设置地区翻译信息
  })
  export default i18n

  
