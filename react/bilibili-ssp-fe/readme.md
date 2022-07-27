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