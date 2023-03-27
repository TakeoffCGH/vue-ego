/**
 * 请求的方法
 */

// import axios from 'axios'
import base from './base'
//node>js 
// const qs = require('querystring')
//导入二次封装的axios文件
import axios from '../utils/request'

//axios接口配置基础地址
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
//http://localhost:8989 

export default {
    /** 
     * 登录接口
     */
    getLogin(params) {//params={username:'',password:''}
        return axios.post(base.login, params)
    },
    /**
     * 商品列表
     */
    getGoodsList(params) {//{page:xx}
        return axios.get(base.goodsList, {
            params
        })
    },
    /**
     * 搜索商品数据
     * search
     */
    getSearch(params) {//{search:xx}
        return axios.get(base.search, { params })
    },   //vm.$api.getSearch
    /**
     * 获取类目选择
     * {id：cid}
     */
    getSelectCategory(params) {
        return axios.get(base.selectCategory, { params })
    },
    /**
     * 添加商品
     * 参数： title cid  category sellPoint price num desc paramsInfo image
     */
    addGoods(params) {//={}
        return axios.get(base.addGoods, {
            params
        })
    },
    /**
     * 删除商品 id
     */
    deleteGoods(params) {
        return axios.get(base.deleteGoods, { params })
    },
    /**
     * 编辑商品id
     */
    updateGoods(params) {
        return axios.get(base.updateGoods, { params })
    },
    /**
    * 统计数据
    */
    getStatistical() {
        return axios.get(base.statistical)
    },
    /**
     * 销量对比
     */
    getSellTotal() {
        return axios.get(base.sellTotal)
    },
    /**
     * 规格参数获取列表 
     * page：xx
     */
    getParams(params) {
        return axios.get(base.params, { params })
    },
    /**
     * 获取订单数据
     * currPage:xx
     */
     orderList(params){
         return axios.get(base.orderList,{params})
     },
     /**
      * 规格参数新增
      *  参数：itemCatId,content,specsName
      */
      insertItemParam(params){
          return axios.get(base.insertItemParam,{params})
      },
      /**
       * 商品列表---获取类目规格配置
       * cid
       */
       categoryData(params){
           return axios.get(base.categoryData,{params})
       }



}


