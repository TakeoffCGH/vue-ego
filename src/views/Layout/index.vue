<template>
  <div class="layout">
      <!-- 左侧导航区域 -->
      <MyMenu class="menu" :isCollapse='isCollapse'/>
      <!-- 右侧内容区域    isCollpase为true时，其样式才有用-->
      <Content class="content" :class="{isActive:isCollapse}" @changeCollapse='changeCollapse' :isCollapse='isCollapse'/>
  </div>
</template>

<script>
import MyMenu from './Mymenu.vue'
import Content from './Content.vue'
export default { 
    components:{
        MyMenu,
        Content 
    },
    data(){
        return {
            isCollapse:false,  //Collapse  折叠
        }
    },
    methods:{
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
        }
    }
}
</script>

<style lang='less' scoped>
.layout{
    .menu{
        // width: auto;
        background: #112f50;
        position: fixed;
        top:0;
        bottom:0;
    }
    .content{
        margin-left: 200px;
        transition: all 0.3s;
    }
    .isActive{
        margin-left: 64px;  //收缩时离左边的距离
    }
}

</style>