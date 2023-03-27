<template>
  <div style="text-align: center; margin: 20px">
    <el-pagination
      background
      layout="total,prev, pager, next,jumper"
      :total="total"
      :page-size="pageSize"
      :current-page.sync="currentPage"
      @current-change="changePage"
    >
    <!-- 疑问，currentPage是父级传过来的，本子组件MyPagination props接收的数据，currentPage没有被修改，怎么就警告修改了呀？ -->
    </el-pagination>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     currentPage:1
  //   }
  // },
  props: {
    total: {
      type: Number,
      default: 100,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    currentPage:{
      type:Number,
      default:1
    }
  },
  // watch: {
  //   currentPage(val) {
  //     console.log("---val--", val);
  //   },
  // },

  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
  created() {},
};
</script>

<style>
</style>