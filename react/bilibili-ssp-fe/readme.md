- 大前端项目
    - bilibili-api 提供数据接口服务
        - koa  后端框架 
            中间件为特色的开发思路
        - index.js 单点入口
            - http服务 
            - 路由、跨域、数据库链接、session服务、等中间件 
                koa-cors  
            - 注意  保持简洁 
                - 路由不让在index.js 写太多， 

- 路由模块化如何做？
    1. 添加一个routers 目录 
    2. 每个路由模块都有独立的文件
    3. Router.get   返回 router.routes()
    4. index.js 根路由 router.use('/search', searchRouter)
    5. app.use(router.routes())
- fastmock -> routes + data 

- 前端 react 全家桶 + ts 
    1. 准备
        - css reset  iconfont rem.js 
            styled-components  createGlobalStyle  IconStyle 
            rem.ts  要模块化 
    2. vite.config.js   alias 
        vite.config.ts + tsconfig.json
    3. rem  任然使用 rem 作为适配方案
        设计师给的设计搞 750px iphone 
        vw  作为适配方案 750   100vw html    10vw = 1rem=75px
        px2rem  手动封装  css 超级 styled-component  stylus/sass 
        不用每次去算， 看设计稿的， 蓝湖
    4. logo 等图片用的不是 png jpeg...   像素图片   放大 模糊？ 
        svg 图片格式， html写出来的
        logo 最在意是什么？ 
        手机-> PC ->　电视   logo.png 
        svg  矢量图（数学图形）+ canvas 数据可视化方向  
        无限拉升 

- ts  api 
    1. axios 作为请求后端的库
    2. 配置 baseURL + 拦截 
        config.ts
    3. 所有的请求列出来

- 后端路由高级能力
    1. 后端模块
        以暴露资源， 以http的协议向全网提供资源
        Restful  url   get 
        模块化的提供资源
        排行榜模块   /ranking/1  
            - 路由模块  routes/ranking   模块先锋
            - 模板模块  views/ranking 
            - 控制器模块 controller/ranking
            - 模型模块  models/ranking 
    2. url 参数   两类
        - path  部分  /ranking/:id  动态路由  params 
            /posts/:pid/comments/:cid
        - koa  ctx.params  {pid: , cid: }
    3. 后端路由中间件函数， 只负责接受校验参数 ， 响应数据
        如何准备 url , 如何取数据....  分给其他层去做 
        MVC　　　　M database   V api 返回的是json 不需要html显示 
        react <-index.js 入口文件 <-> 路由 /ranking/:id <-> api | controllers

- 面试
    1. 面试不是考试， 而是当面展示自己 
        面试官的心理预期 公务员面试 牛客网 
        面试官的自由度更大 
    2. 给面试官下套
        卖一个破绽  Promise.all +  数据管理   loading  严谨问题
        Promise.all

- redux 里 进入新的状态，不希望也不应该去改变或
    引用旧状态， 甚至因为redux一套严格的状态管理设计模式， 我们希望状态对象是不可改变， 只能生成新的对象   Object.assign   {...} ImmutableJS 
    Object.freeze()

- 下一个ts + node + redux 项目中， 刻意的加注释