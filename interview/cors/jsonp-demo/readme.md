- 面试官底牌
    1. 会前后端联调
        - 分工不一样 前后端分离
        - 前端驱动界面数据通过axios 向后端发出请求
            fastmock，node假数据
            前后端数据交换格式 是json
            axios baseUrl 
            development阶段：  localhost fastmock
            product阶段：  后端给的api /api/ 
        - 后端在某个method + url 提供接口数据
        - 项目确立后，讨论一个接口文档
            POST  /api/auth/login
            传的参数 {username:'admin',password:'123456'}
            返回的数据{
                code： 0，
                token： ''
                user: {
                    username: ''
                }
 
            }
- 难点
    跨域解决方案：
        1. 后端的cors 中间件 原理：接收header设置的域， 方法 跨域请求
            Access-Control-Allow-Origin
        2. jsonp 
            不一定，还有他jsonp方案
            img link script 等标签 可以发出跨域请求， 不受限 
            script 服务器端返回的是一段js 都OK

- 跨域
    1. 产生
        协议 域名 端口
    2. 同源策略
        corss domine error
    3. 公司大的时候
        公司内部跨域的方式来启用服务
