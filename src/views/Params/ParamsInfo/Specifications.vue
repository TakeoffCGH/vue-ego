<template>
  <div class="params">
    <!-- 1. 目录位置 -->
    <div class="nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/params' }"
          >规格参数</el-breadcrumb-item
        >
        <el-breadcrumb-item>规格包装</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 2. 搜索框 -->
    <div class="header">
      <el-input v-model="inp" />
      <el-button type="primary">查看</el-button>
      <el-button type="primary" @click="showParams">添加</el-button>
    </div>

    <!-- 3. 表格 -->
    <el-table :data="tableData" class="my-table">
      <el-table-column prop="itemCatId" label="规格参数ID" width="120">
      </el-table-column>
      <el-table-column prop="id" label="类目ID" width="120"> </el-table-column>
      <el-table-column prop="specsName" label="规格名称" width="120">
      </el-table-column>
      <el-table-column prop="paramData" label="规格参数" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template>
          <el-button size="mini">查看</el-button>
          <el-button type="primary" size="mini" icon="el-icon-edit">
            编辑</el-button
          >
          <el-button size="mini" type="danger" icon="el-icon-delete"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 4. 分页 -->
    <MyPagination
      :total="total"
      :pageSize="pageSize"
      @changePage="changePage"
    />
    <!-- 5. 弹框 -->
    <ParamsDialog ref='dialog'/>


    
  </div>
</template>

<script>
import MyPagination from "../../../components/MyPagination.vue";
import ParamsDialog from './ParamsDialog.vue'
export default {
  components: {
    MyPagination,
    ParamsDialog
  },
  data() {
    return {
      inp: "", //输入框
      tableData: [],
      total: 10,
      pageSize: 1,
    };
  },
  methods: {
    /**
     * 点击显示弹框--配置规格参数
     */
    showParams(){
      this.$refs.dialog.dialogVisible= true;
    },
    /**
     * 点击分页-切换
     */
    changePage(num) {
      this.http(num);
    },
    /**
     * 获取规格参数列表
     */
    http(page) {
      this.$api.getParams({ page }).then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          this.tableData = res.data.data;
          //获取分页
          this.total = res.data.total;
          this.pageSize = res.data.pageSize;
        }
      });
    },
  },
  created() {
    this.http(1);
  },
};
</script>

<style lang='less' scoped>
.params {
  margin: 10px;
}
.nav {
  padding: 10px;
}
.header {
  display: flex;
  background: #fff;
  padding: 10px;
  border: 1px solid #eee;
  button {
    margin-left: 20px;
  }
}
.my-table {
  margin: 10px auto;
}
</style>