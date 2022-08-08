- jwt
    登录
    cookie session 怎么实现登录的
    1. 用户会话状态和身份
    2. uid
    3. 权限
        cookie  uid  -> mysql uid  相等
        关系型
        CRUD uid
    设置一个逻辑 把uid给做掉 
    cookie session  缺点：安全机制 
    新的方案： 加密  解密
    给前端的是一个加密后的 cookie: uid 或者 session: id  拿去后也没用
    加密的部分存到token或者localStorage   签发凭证
        - localStorage 
            1. 解决http性能问题 不用每次cookie
            2. axios拦截token
    ->  服务器端 解码  拿到uid去到session对象查找 
            - token -> {
                uid:
                username:
                hometown:...
            }

- mvc 模式理解
    1. 路由是后端重要模块
        www 服务的核心解决了资源定位问题
        restful 一切皆资源
        get/post  Method  url  /path
    2. 路由要克制，只做路由的定义
    3. 立马交给controller 
        三层之一
    4. controller 参数解析校验 业务开发 
        调用model层取数据 把结果写入View层(响应json)
- post 拿请求体数据 用中间件
    1. http 请求中 post更复杂，
    2. 处理请求之前 先收集请求体数据
        需要 body-parser 中间件

- jwt 面试官考题逻辑
    1. 深入了解http协议
        - POST 和 GET 不一样  编码 x-www-form-urlencoded
            application/json form-data
        慢慢到达过程 路由 -> controller  提前准备好数据接收
        中间件bodyparser 将请求体 parser成json {usename,password} = ctx.resquest.body 
        - accessToken 放在请求header中，Anthorization 
            http Anthorization 特定的语义
        - cookie 每次带uid明文， token 是拿不到uid
            只能在服务器解开
        - session + cookie / session + jwt 都可以 后者更安全
    
- 中间件 
    cors bodyParser 数组， web 打理过程是多个中间件
    相互合作， 流程， 需要我做就做， 做完通过next
    向后传递 ctx.body
    基于请求响应http  中间件打理这个流程
    post /api/auth/login  ->  cors -> bodyparser -> controller
    post /api/test/aomment -> cors -> auth -> controller 
    其中auth手写中间件， 复用jwt 鉴权 

        

- 策略和计划
