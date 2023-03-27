<template>
  <el-dialog title="添加规格参数" :visible.sync="dialogVisible" width="50%">
    <!-- 显示规格类目 -->
    <TreeGoods @sendTreeData="sendTreeData" />
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button
        type="primary"
        @click="innerVisible = true"
        :disabled="isDisabled"
        >确定并添加分组</el-button
      >
    </span>
    <!-- 二级弹框---嵌套 -->
    <el-dialog
      width="45%"
      title="商品规格参数配置"
      :visible.sync="innerVisible"
      append-to-body
    >
      <div class="title">当前选中的商品：{{ treeData.name }}</div>
      <el-button type="primary" style="margin: 10px" @click="addDomain"
        >新增规格列表</el-button
      >
      <hr />
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <!-- groups=[{title:'',value:'',children:[]},...] -->
        <el-form-item
          v-for="(item, index) in dynamicValidateForm.groups"
          :label="item.title + index"
          :key="index"
          :prop="item.title"
          :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }"
        >
          <div class="item">
            <el-input v-model="item.title"></el-input>
            <el-button @click.prevent="addChildDomain(index)"
              >增加子组</el-button
            >
            <el-button @click.prevent="removeDomain(index)">删除</el-button>
          </div>
          <!-- 内层的表单项 -->
          <el-form-item
            v-for="(ele, i) in item.children"
            :label="ele.title + i"
            :key="i"
            :prop="ele.title"
            :rules="{
              required: true,
              message: '域名不能为空',
              trigger: 'blur',
            }"
          >
            <div class="item">
              <el-input v-model="ele.title"></el-input>
              <el-button @click.prevent="removeChildDomain(index, i)"
                >删除</el-button
              >
            </div>
          </el-form-item>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button  type="primary" @click="submitForm('dynamicValidateForm')">确定</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </span>
    </el-dialog>
  </el-dialog>
</template>

<script>
import TreeGoods from "../../Goods/GoodsList/TreeGoods.vue";
export default {
  components: {
    TreeGoods,
  },
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      isDisabled: true, //默认不可以点击
      treeData: {}, //tree数据
      dynamicValidateForm: {
        //动态表单
        groups: [],
      },
    };
  },
  methods: {
    /**
     * 获取点击的tree的数据
     */
    sendTreeData(val) {
      console.log("获取tree的数据", val);
      this.treeData = val;
      this.isDisabled = false;
    },
    /**
     * 增加子组
     */
    addChildDomain(index) {
      this.dynamicValidateForm.groups[index].children.push({
        value: "",
        title: "",
      });
    },
    /**
     * 删除当前的组
     */
    removeDomain(index) {
      this.dynamicValidateForm.groups.splice(index, 1);
    },
    /**
     * 删除子组
     */
    removeChildDomain(index, i) {
      this.dynamicValidateForm.groups[index].children.splice(i, 1);
    },
    /**
     * 新增列表---增加大组说明规格配置
     */
    addDomain() {
      this.dynamicValidateForm.groups.push({
        title: "",
        value: "",
        children: [],
      });
    },
    /**
     * 提交事件
     */
      submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('提交规格参数',this.dynamicValidateForm.groups);
          // 参数：itemCatId,content,specsName
          this.$api.insertItemParam({
              itemCatId:this.treeData.cid,
              specsName:this.treeData.name,
              content:JSON.stringify(this.dynamicValidateForm.groups),
          })
          .then(res=>{
              console.log('====',res.data);
              if(res.data.status===200){
                  //添加成功  隐藏弹框 更新规格列表
                  this.innerVisible = false;
                  this.dialogVisible = false; 
                  //清空数据
                  this.dynamicValidateForm.groups=[];
                  this.isDisabled = true;
                  this.$parent.http(1);
              }else{
                  console.log('信息提示--失败了--缺点：数据库没有去重');
              }
          })

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /**
     * 重置
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='less' scoped>
.demo-dynamic {
  margin: 10px;
}
.item {
  display: flex;
  margin-bottom: 10px;
  button {
    margin-left: 10px;
  }
}
</style>