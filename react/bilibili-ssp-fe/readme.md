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

- 从理解， 记忆，表达上训练
    自信  架构 工具函数封装 字符串处理 切忌无脑
    语言逻辑  首先  其次  再次  最后
        比喻  场景  诙谐
    底层，原理 再感性的表达出来

utils文件夹：
- 如果在 UI 层 或 后端  为了某个业务  写了超过 3行以上的代码
    就应该在utils 抽离封装一下

- utils 封装函数的ts 写法
    - 封装 复用 好读 抽象
    -  /*
        *
        */
    - 参数  返回值  ts类型化
    - ts 值 会类型推导，提高代码正确性的原因 因为是js 随意去改变类型（再赋值） 
        没有类型限制， 不太好改
        比喻 没有规矩的喝酒 酒杯（变量） 饮料（string） 啤的（number）， 白的（boolean） ...不省人事（代码出错）
    - 刻意练习业务逻辑  代码量

- 首页 videos 列表 raect + redux + ts
    - 封装 video-item 组件
        ts propType
        图片懒加载
    - video models/

- 为什么来B站？
    1. 表扬 B站  弹幕文化
    2. 3年 合格的工程师，服务B站的用户
    3. 5年内 融入B站的创新性产品，为公司的 发展贡献自己的智慧

- video 列表 403 Forbidden
    1. 图片资源属于谁？
        B站服务器  图片服务器 分布式？git DNS
    2. 4XX 用户错误
        403 Forbidden 权限问题  安全性问题 不属于你的资源 省去一些流量 
            1. 隐藏主机名，以便请求资源 -->
                <meta name="referrer" content="no-referrer" />
            2. 
        肉鸡攻击 image  url + get + host (本站，还是其他) 侵权
       5XX 服务器错误
    3. 前端图片访问403 借助node fetch 解决
        版权
        限流
        安全
        /transfer/image 中转
        脱离浏览器表达 协议层
        ？pic = .....
