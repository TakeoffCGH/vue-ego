<template>
  <div>

    <div class="header">
      <i
        v-if="!isCollapse"
        @click="changeMenu"
        class="iconfont icon-right-indent"
      ></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
      <div class="header-right">
        <el-dropdown @command="clickLang">
          <span class="el-dropdown-link" style="color: #fff">
            {{langText}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"><!--在element元素里触发原生事件时，如click，需要带上native-->
            <el-dropdown-item command="zh" @click.native="text">中文</el-dropdown-item>
            <el-dropdown-item command="en" @click.native="text">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="user">
          <span @click="text"> 欢迎：{{ userinfo.user }}</span>
          <i class="iconfont icon-tuichu" @click="loginout"></i>
        </div> 
      </div>
    </div>

    <!-- 内容区域---路由出口 -->
    <div class="content">
      <router-view/>
    </div> 
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)
export default {
  props: ["isCollapse"],
  data(){
    return{
        langText:'中文'
    }
  },

  computed: {
    ...mapState("loginModule", ["userinfo"]),
  },
  methods: {
    ...mapMutations("loginModule", ["clearUser"]),
    changeMenu() {
      //点击切换按钮的时候 修改父组件的数据   isCollapse
      this.$emit("changeCollapse");
    },
    clickLang(command) {
      console.log(command);
      this.$i18n.locale = command;  
      // localStorage.setItem('locale',command)
    },
    loginout() {
      //退出登录
      //清空vuex数据
      this.clearUser();
      //清空本地存储
      localStorage.removeItem("user");
      //返回登录
      this.$router.push("/login");
    },
    text(){
      if(this.$i18n.locale==='zh'){
        this.langText = '中文'
      }else if(this.$i18n.locale === 'en'){
        this.langText = 'english'
      }
      // console.log('我被触发了',this.langText);
    }
  },
};
</script>

<style lang='less' scoped>
.header {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #1e78bf;
  .iconfont {
    font-size: 24px;
  }
}
.header-right {
  float: right;
  padding-right: 20px;
  display: flex;
  .user {
    margin-left: 20px;
    span {
      position: relative;
      top: -4px;
      margin-right: 10px;
    }
  }
}
</style>