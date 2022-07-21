- cookie  session
    识别用户状态的
- http 服务怎么启动
    node  里那个模块  什么方法
    1. node 内置了http模块  非常的方便 少数几行就能完成任务
    2. http 设置成请求响应且无状态的 
        分布式的概念  git也是分布式的
        - 互联 通过IP协议 将http://localhost:8080 对应的ip地址 127.0.0.1
        - 端口
            系统拥有多项服务 web Server只是其中之一
            A  IP -> B(webServer)
    3. 用户输入url  www.baidu.com 采用域名 方便记忆
    4. www.baidu.com 通过 DNS 域名解析为对应的 ip地址
        - 1. 以前访问过baidu.com
                本地dns 缓存 的host文件
        - 2. 局域网 dns 服务器
                以key value 形式存储的 数据库
        - 3. 第一次访问过 写入到本地dns 缓存
    5. 拿到ip地址后  通过TCP/IP  三次握手
        A: [url method http] + ip (源地址，目标地址) req
        B: 服务器的 拿到请求的端口 -> 映射 进程
            web Server createServer 的 callback执行 res.end('') 返回结果
        A： IP -> 显示结果

- node 和 redux 实现功能的思路有点像
    - 这个思想就是中间件的思想
        启用中间件为我们的应用提供农功能
    - 第三方的中间件 koa-static
        基础路径+/文件名 直接访问文件内容
        app.use(staticServer(path.join(__dirname,'./static')))
        静态资服务器的搭建 初次访问时将硬盘的静态资源缓存到
        缓存到内存中 
    - app.use(async ctx=> {
        // 普通的中间件 是个函数
        // mysql 服务 是动态的
    })

- httpOnly 
    安全设置 cookie属性 
    httpOnly:true   js就无法读取 避免XSS 跨脚本攻击
    HTTPOnly:false  对网站做一些基本设置  如：日间模式 夜间模式

- session ?
    又一种识别用户身份状态的
    cookie 不够用了， 才又来一个 session
    - cookie  每次请求都会带上，吝啬大小 性能 http越大 速度越慢
    - cookie  每次请求中带上  客户端和服务器端都有的状态标记
        uid  足够我们识别用户吗？
    - session  存储表示用户状态， 只在后端内存中
        cookie uid  传到服务器端来了，把在cookie拿到的uid 当做一个钥匙 session开启存储在json文件的{key：value} 内存表数据表

        {name:'hgb', sex: '男', hometown:'赣州'，avatar：'',level:3,uid: 123456}
        内存中 为每个访问用户， 提供一个更大的状态存储的空间 存储更大的数据{}，比cookie更从容一些（空间更大），方便业务的开展

        session 基于 cookie
        



