/**
 * 接口路径配置：
 * 一般文件目录：base.js  index.js 
 * 但是公司不一定
 *      config
 *          login  index.js config.js 
 *       index.js 
 *       xxxx.js 
 */

const base ={
    host:'http://localhost:8989',//基础域名
    goodsList:'/projectList', //商品列表 
    search:'/search',//商品搜索
    selectCategory:'/backend/itemCategory/selectItemCategoryByParentId',//类目选择
    uploadUrl:'/upload',//图片上传 post请求
    addGoods:'/backend/item/insertTbItem',//添加商品
    deleteGoods:'/backend/item/deleteItemById',//删除商品
    updateGoods:'/backend/item/updateTbItem',//编辑商品
    login:'/login',//登录接口
    params:'/backend/itemParam/selectItemParamAll',//规格参数列表
    statistical:'/statistical',//统计数据
    sellTotal:"/sellTotal",//统计数据
    orderList:"/order-list",//订单列表
    insertItemParam:"/backend/itemParam/insertItemParam",//规格参数配置-添加
    categoryData:"/category/data",//规格参数配置

}

export default base;
