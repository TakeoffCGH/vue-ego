<template>
  <div>
      <div id="container"></div>
  </div>
</template>

<script>
    export default {
        mounted(){
            var map = new AMap.Map('container', {
            zoom:14,//级别
            center: [113.207603,23.272521],//中心点坐标
            viewMode:'3D'//使用3D视图
        });
        }
    }
</script>

<style>
  #container{
    width:100%;
    height:900px;
    /* margin-right: 50px;
    transform: translate(-50%,-50%); */
  }
</style>