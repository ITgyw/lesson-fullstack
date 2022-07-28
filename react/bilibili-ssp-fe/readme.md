- 大前端项目
    - bilibuku-api  提供数据接口服务
        - koa 后端框架
            中间件为特色的开发思路
        - index.js 单点入口文件
            - http服务
            - 路由、跨域、数据库链接、session服务、等中间件
                koa-cors
            - 注意  保持简洁 
                - 路由不要在Index.js 写太多

- 路由的模块化如何做
    1. 添加一个routers 目录
    2. 每个路由模块都有独立的文件
    3. Router.get  返回router.routes()
    4. index.js 根路由 router.use('./serach',searchRouter)
    5. app.use(router.routes()) 
- fastmock -> routes + data

- 前端 react 全家桶 + ts
    - 准备
        - css reset iconfont rem.js
            styled-components 提供的createGlobalStyle IconStyle
            rem.ts 要模块化
    - vite.config.js  alias
        vite.config.ts + tsconfig.json
    - rem  任然使用 rem 作为适配方案
        设计师给的设计稿 750px iphone
        vw  作为适配方案  750 == 100vw  在浏览器页面html fontsize:10vw 10vw=1rem 那么 1rem=75px
        px2rem 手动封装  css 超集 styled-component  stylus/sass
        不用每次去算， 看设计稿的， 蓝湖 
    - logo 等图片用的不是 png jepg等像素图片 它们放大会模糊
        svg 图片格式，是用html写出来的
        svg 矢量图(数学图形拼成一张图) + canvas   均为数据可视化方向
        svg可以无限拉伸

- ts  api
    1. axiox 作为请求后端的库
    2. 配置baseURL + 拦截
    3. 对所有的请求封装列出来
    
