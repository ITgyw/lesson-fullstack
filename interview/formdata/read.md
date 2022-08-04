实战开发能力 18
- 心理上跨越
    套路
    1. formdata  上传文件？
        底层逻辑 复杂的业务能力 + 基础知识的考察
    2. form-data 是form 表单提交数据的编码格式 上传文件是必须的
        默认是 x-www-form-urlencoded
    3. postman 工具 请求模拟工具 
    4. node 对post 请求的解析， 因为 和 get url 传参
        慢慢到达？ 中间件？ body-parser
        慢慢收集传过来的数据， 要在 路由前启动 
        req body + method + url -> bodyParser 数组准备好 -> 路由
        koa-body
    5. koa-multer 优秀的文件上传中间件
        你处理过什么复杂的业务？： 文件上传

    6. 流程 
        form-data  multipart  -> multer disStorage 配置 multer(config)
        -> post 中间件  -> router
        中间件思维  router -> 登录auth,文件上传 -> router 处理中间件

- html5 主题 
    - html ？ xml的一种 1990 文档标记语言
    - html4 1997
        有DTD部分
    - html5 2008 退出
    <!DOCTYPE html> html5的声明
    1. 语义化标签 
    - html5有哪些“新”特性
        1. 语义化标签
            图
            canvas video audio 但以前是用flash实现
            - 比所有布局全部采用div标签 代码可读性提升
            - 有利于SEO 搜索引擎优化 识别页面结构 article标签更重要
            - 方便设备解析， 如：盲人阅读

- html5有哪些功能？
    1. 表单功能增强
        - input type placeholder autofocus  required maxLength minLength
        - formData
    2. video audio B站 爱奇艺
    3. canvas(启用显卡显存) 弹幕（刷火箭 高帧率刷新 requestAnimationFrame） 游戏 
    4. 拖放 
    5. 本地存储：用户端 打开更快 
        1. loacalStorage（浏览器一直存在）， sessionStorage（浏览器关闭就没了） 且存储格式均为文本格式
        key => value     setItem('userInfo',JSON.Stringify(user))
        JSON.parse(getItem('userInfo'))
        2. 数据库 indexDB 能执行sql语句
        3. cookie 
    6. Cache Manifest 离线存储功能 
    7. Web Worker 浏览器给予的js 多线程能力
    
 


