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
