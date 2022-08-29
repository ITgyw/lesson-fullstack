HTTP 协议有什么限制
    - 无状态
    - 完成即断开
    - 单向 服务器被动伺服

    - 在线聊天室  HTTP怎么做？
        广播 HTML5 
        你来我往 setInterval 轮询 + ajax + dom 请求服务器  缺点是：性能
        服务器端有推送能力 websocket 在协议层 提供新的应用(区别于web，实时聊天)方案
        底层都是TCP/IP
        websocket web 端的Socket html5 功能， 弥补了 HTTP1.X缺陷， HTTP 请求只能由客户端发送请求
        Socket双向通信的Socket 在web端的实现HTML5 
        当客户端要和服务器建立webSocket时，index.html web QQ , 客户端回向服务器端发送一个HTTP请求
        200 index.html  会包含一个Upgrade请求头， 来告知服务器，客户端向家里一个
        webSocket 连接 不在断开，持久连接的
        Upgrade:websocket  Connection:Upgrade Sec-WebSocket  101 Switch Protcols WebSocket
        转换成功后，以后发送和接收消息就通过这个连接通道

1. http 模块  server
