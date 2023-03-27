<template>
  <el-dialog title="合同内容" :visible.sync="dialogVisible" width="50%">
    <!-- 
      属性：
        :src='' 文件的路径 
        :page   显示的页码
        :rotate  旋转90的倍数

        event：
            @num-pages="pageCount = $event"  获取总页码
			@page-loaded="currentPage = $event"  获取当前的页码
        methods:
            print() 打印
   -->
    <hr />
    <el-button @click="num--">上一页</el-button>
    <el-button @click="num++">下一页</el-button>
    <hr />
    <!-- 写法一： -->
    <p>{{ currentPage }} / {{ pageCount }}</p>
    <el-button @click="print">打印合同</el-button>
    <pdf
      src='../../../public/sxt.pdf'
      ref='mypdf'
      :page="num"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
      style="display: inline-block; width: 400px"
    ></pdf>

    <!-- 写法二：展示所有的pdf文件 -->
    <!-- <pdf
			v-for="i in numPages"
			:key="i"
			:src="src"
			:page="i"
			style="display: inline-block; width: 25%"
		></pdf> -->

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
//1. 安装pdf : npm i vue-pdf -S
//2. 导入pdf  3. 使用组件
import pdf from "vue-pdf";
//获取pdf文件
const source = pdf.createLoadingTask("./sxt.pdf");
export default {
  components: {
    pdf,
  },
  data() {
    return {
      dialogVisible: false,
      num: 1,
      currentPage: 0,
      pageCount: 0,
      numPages: undefined,
      src: source,
    };
  },
  mounted() {
    this.src.promise.then((pdf) => {
      this.numPages = pdf.numPages;
    });
  },
  methods:{
      //打印合同
      print(){
          this.$refs.mypdf.print();
      }
  }
};
</script>

<style>
</style>