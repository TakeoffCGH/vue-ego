<template>
<!--    
        由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，
          所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。
        :props="props"  props	配置选项，具体看下表
                label	'指定'节点标签为节点对象的某个属性值
                children	'指定'子树为节点对象的某个属性值
                isLeaf	指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效

        :load="loadNode"
                加载子树数据的方法，仅当 lazy 属性为true 时生效
                自动执行函数 -- 异步请求数据 
        lazy
            是否懒加载子节点(需要哪个子节点才返回，这种机制称为懒加载)，需与 load 方法结合使用
        accordion
            是否每次只打开一个同级树节点展开
        --> 
  <el-tree 
    :props="props" 
    :load="loadNode" 
    lazy accordion
    @node-click='nodeClick'
  > 
  </el-tree>
</template>

<script>
export default {

  data() {
    return {
      // 注意，这里的props在data里面
      props: {
        label: "name",
        // children: "zones", 
        // isLeaf: "leaf",  // 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
      },
    };
  },

  methods: {

    /**
       * 懒加载被点击的各个节点
       */
    loadNode(node, resolve) {//分情况懒加载各层数据
      console.log('loadNode---it is automatic to be emitted',node);
      if (node.level === 0) {
          //从后台成功地返回数据结果resolve()给第一层的tree（比如name等）
          this.$api.getSelectCategory()   //没有传递参数，返回所有的数据
          .then(res=>{
            console.log('Show the first level data',res.data.result);
             return resolve(res.data.result);
            //  return resolve(['firstName','secondName'])
          })
      }
      if (node.level >= 1){
          //请求当前的点击的tree下面的数据
            this.$api.getSelectCategory({
                id:node.data.cid    //传递
            })
          .then(res=>{
              if(res.data.status===200){
                  console.log('Show the plus-level data',res.data.result);
                  return resolve(res.data.result);
              }else{
                  return resolve([])  //为空
              }
          })
      }
    },

    /**
   * 节点被点击时的回调
   * 点击tree获取数据
   */
    nodeClick(data,node,nodeComponent){
        console.log(
          'A node that is clicked',node,
          ' \n this is data of node above',data,
          '\n this is nodeComponent',nodeComponent
        );
        //传递数据给父组件
        this.$emit('sendTreeData',data)
    },

  },
};
</script>

<style>
</style>