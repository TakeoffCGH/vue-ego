<template>
  <div>
    <!-- default-active	当前激活菜单的 index -->
    <!-- unique-opened	是否只保持一个子菜单的展开,默认false -->
    <!-- router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转,默认为false -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#112f50" 
      active-text-color="#1e78bf"
      router
      :collapse="isCollapse"
      unique-opened
    > 


      <el-menu-item>
        <span slot="title">易购后台管理系统</span>
      </el-menu-item>

      <!-- 首页 -->
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <!-- <span slot="title">首页</span> -->
        <span slot="title">{{ $t("menu.home") }}</span>
      </el-menu-item>

      <!-- 商品管理 -->
      <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <!-- <span slot="title">商品管理</span> -->
          <span slot="title">{{ $t("menu.goods") }}</span>
        </template>
        <el-menu-item index="/goods/goods-list">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/goods/goods-verify">
          <i class="el-icon-menu"></i>
          <span slot="title">商品审核</span>
        </el-menu-item>
      </el-submenu>

      <!-- 规格参数 -->
      <el-submenu index="/params">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <!-- <span slot="title">规格参数</span> -->
          <span slot="title">{{ $t("menu.specifications") }}</span>
        </template>
        <el-menu-item index="/params/specifications">
          <i class="el-icon-setting"></i>
          <span slot="title">规格与包装</span>
        </el-menu-item>
      </el-submenu>

      <!-- 广告分类 -->
      <!-- <el-menu-item index="/advert">
        <i class="el-icon-data-board"></i>
        <span slot="title">{{ $t("menu.board") }}</span>
      </el-menu-item> -->

      <!-- 订单管理 -->
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <!-- <span>订单管理</span> -->
          <span slot="title">{{ $t("menu.specifications") }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-menu"></i>
            <!-- <span slot="title">订单列表</span> -->
            <span slot="title">{{ $t("menu.order") }}</span>
          </el-menu-item>
          <el-menu-item index="/order/send-goods">
            <i class="el-icon-menu"></i>
            <span slot="title">发货列表</span>
          </el-menu-item>
          <el-menu-item index="/order/change-goods">
            <i class="el-icon-menu"></i>
            <span slot="title">换货列表</span>
          </el-menu-item>
          <el-menu-item index="/order/order-back">
            <i class="el-icon-menu"></i>
            <span slot="title">退货管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <!-- 个人中心 -->
      <el-menu-item index="/user">
        <i class="el-icon-data-board"></i>
        <!-- <span slot="title">个人中心</span> -->
        <span slot="title">{{ $t("menu.person") }}</span>
      </el-menu-item>

      <!-- 地图位置 -->
      <el-menu-item index="/map">
        <i class="el-icon-location"></i>
        <!-- <span slot="title">地图位置</span> -->
        <span slot="title">{{ $t("menu.location") }}</span>
      </el-menu-item>


    </el-menu>
  </div> 
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: 0px;
  .is-active {
    // background: #1e78bf !important;
    // color: #fff !important;
  }
}
// .el-menu-vertical-demo{
//   background: #112f50;
// }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// /deep/ .el-submenu{
//   .el-menu{
//     background: rgb(14, 35, 61);
//   }
// }
// /deep/ .el-menu-item:hover,.el-submenu:hover{
//     background: #0d2641;
// }
</style>