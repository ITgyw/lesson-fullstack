- product   cart
  商口数据 
  数量 
  cart ?
- 模块化后，  看一眼设计稿,
  核心的状态， 状态的修改
  添加核心的mutations, actions
  state -> actions-> api
  ->mutations-> state
  数据流转进行逻辑设计
- 添加到购物车
  cart.state.items
  mapActions('cart', {
    addProductToCart
  })
  
- 老版本项目如何工程化
  1. package.json  工程化的入口
    npm run dev 
      webpack  去配置  
      webpack-dev-server --inline 热更新
      --progress 进度条 --config指定配置文件默认package.json  build/webpack.dev.conf.js
      webpack-dev-server
    npm run build
  2. 商业项目工程化架构
    - 孤单的webpack.config.js 肯定不够
    - build文件夹  放置webpack配置
    - .dev.js开发配置  .product.js产品配置   
    - webpack-merge 合并 webpack.base.config.js

- 购物车 vuex
  差不多 
  react 
  - state 读操作  单一状态树  分模块  状态节点
    store(单一状态树) <- cobinReducers <- reducer(分模块) <- 状态对象 (状态节点) 
  - 写
    不能直接写  数据同步  限制随意修改  消灭不一致
    dispatch action函数 返回action对象 {type,payload}
    reducer 匹配case 重新计算 reducer函数 产生新的状态来MVVM

  vuex
  dispatch action  异步中间件
  vuex 没有reducer函数 state {}
  但有commit mutations函数  可以直接修改 状态
  

  