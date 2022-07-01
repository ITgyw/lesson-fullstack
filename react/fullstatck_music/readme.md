- fullstack 全栈
    1. 前端方向 vitejs/app  工程化生成单页应用
    2. 后端使用 开源的Neteasecloud
        - .gti 干掉
            同一个目录下不能有多个git
    3. 前端和后端怎么交流？
        axios api -> 
        frontend UI 组件  需要数据(fastmock 假数据)
        backend  api 3000 接口 
        前后端分离

- npm install -g cnpm -registry=http://registry.npm.taobao.org
    全局安装 cnpm  来自阿里
    npm i 国外的服务器上去把package.json 中依赖的包下下来  好慢 容易出错
    cnpm i 到阿里云上下载 更快
    -- registry 手动设置安装源
    cnpm 和npm 用法一样

- react 全家桶到位
    react 负责组件化， MVVM 响应式
    react-router 路由
    redux 负责 数据流管理
        前端 ->  api ->  redux（中央银行） -> 后端

- react 是声明式的UI组件开发框架
    1. 那么多的组件 好复杂， 好多API
    2. 可以用组件来声明功能， 更好读 
    
- react + reactDOM 
    react-router + react-router-dom
    redux + react-redux 

- 数据仓库的搭建过程
    1. 从react-reduce 中解构Provider
        声明给应用添加数据管理功能
    2. 在store专有的目录下redux中creatStore 创建仓库实例
    3. createStore方法接收一个reducer函数

1. reset
    三元使用styled-components 提供的crateGlobalStyle 全局样式
    style.div`` wrapper容器 hash化
2. adapter

3. axios 功能点
    - 网络请求千千万，api axios 把单例干
    - 统一了vue raect  native app 三端的请求库
    - 每个请求 域名 + 端口部分 没必要重复，
        可以配置到baseURL中
    - 为了切换请求域名的需要
        http://localhost:3000/banner
    - 拦截器 interceptors.response.use()
        解构好res.data  处理错误
    interceptors.request.use()
    - 登录时， 服务器会给我们一个授权码 token
    - 我们每次请求时，需要手工带上
        拦截器 request 和 response
        req.header  请求头  Authorization 授权信息
        
- 组件数据管理功能被剥夺
    1. redux管理数据更专业
        - store store/index.js
        - reducer 集合 交个store
        - combineReducers 来提供reducer
        - 项目的各个模块  文章 评论 用户模块 ...
        - 每个模块都是一个reducer函数
        - reducer还可以多次运行 
        - dispatch 一个他想要的action
        - 页面会自动更新
        - connect mapStateToProps 获取状态
            mapDispathToProps 触发状态的改变

    2. mapStateToProps 状态读操作

    3. mapDispatchToProps 写操作
        - 状态不可直接修改 redux的起因
        - 有法可依 
        - dispatch getRankList 异步action action redux-thunk 支持
            data dispatch(changeRankList) 同步action
        - dispatch({type:'',data}) 在action里
        - reducer 根据type 重新计算
        - 状态发生改变，应用了状态的地方mvvm

- 小型项目没必要用redux，
    如果你在想要不要用redux，那就不要用
    - 如果足够复杂，模块化reducer迁移到pages相应模块下
        pages/store 新的目录架构
    - store 中央 src/store + 模块化  @pages/store{n}

- 修改状态有固定的流程
    - 属于actionCreators
    - 一般标配两个action， 一个同步的， 一个异步的，
    - dispatch才能触发
    - action 对象固定格式 {type：}
    - type 方便我们把action为什么要改变记录下来
    - 从init -> action状态 都是可被追溯的
    - 数据管理的严谨性

- styled-components
    页面播放歌曲动态高度，props 传参
    ${函数} 函数的返回值
    页面的播放状态

- 移动端 一般必须better-scroll 生成scroll 组件
    1. 滚动体验更好
    2. 下拉刷新， 上拉加载更多
    3. 使用了神三元封装的Scroll组件
    4. 移动端加载更多的标配
    

 npm i prop-types

 npm i better-scroll@2.0.0-beta.4
