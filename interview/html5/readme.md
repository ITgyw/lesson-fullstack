- html5有哪些功能？
    1. 表单功能增强
        - input type placeholder autofocus  required maxLength minLength
        - formData
    2. video audio B站 爱奇艺
    3. canvas(启用显卡显存) 弹幕（刷火箭 高帧率刷新 requestAnimationFrame） 游戏 
    4. 拖放 
    5. 本地存储：用户端 打开更快 
        1. loacalStorage（浏览器一直存在）， sessionStorage（浏览器关闭就没了） 且存储格式均为文本格式
        key => value     setItem('userInfo',JSON.Stringify(user))   5-10M
        JSON.parse(getItem('userInfo'))
            应用场景  举出哪些
            - 存储地理位置 gelocation  localStorage存储经纬度
            - 存储登录信息 取代cookie登录  基于token
                cookie uid  ->  服务器端 session中间件（基于cookie）内存会话存储对象  key value
            - 用户信息的存储 昵称  头像
            - redux 一些需要持久化的状态
                todos [{text:,done:}] dispatch  localstorage.setItem()
                getItem() diapatch  setTodos()
                logined
                userInfo
            - 主题颜色， icon， 风格， 语言(国际化)
                en -> cn  看小说
            - 用户设置

        2. 数据库 indexDB 能执行sql语句    几十M

        3. cookie：不属于html5 HTTP 无状态 每次都带上加剧了请求的性能开销 session 很小 4kb
        4. 缓存：不属于html5  静态资源 都会缓存 js不介入  状态码


    6. Cache Manifest 离线存储功能 
    7. Web Worker 浏览器给予的js 多线程能力
        - js 是单线程
            优点？ DOM 简单
        - 高精度的计算 BigInt
            大数据时代 城市大脑
            web game
            vr 虚拟现实 加密
            event loop 搞不定
        - js 启动一个新线程  去专门做一件什么事
            告诉主线程 结果
        js 由web worker 实现了多线程
        js 是单线程 ， 结合event loop 机制 满足当下web 应用开发需求
        Woker 目前没有主流使用， 但在未来 大数据/人工智能
        1. new Worker('worker.js')
        2. 这个文件里不再使用DOM BOM 相关的功能。 主线程负责这些
        3. postMessage(data) 线程间通信
        4. onmessage 

    8. html5 什么功能？ 点外卖 地理定位 lbs 应用 硬件能力
        - navigator。geolocation  BOM
        - lbs应用是移动端时代爆发的一类应用， 百度地图 美团 无人驾驶汽车
            基于经纬度的
        - 注意保护用户的隐私， 在使用功能时，浏览器代理会询问是否授权
            授权一次后，默认上次 除非清空
        - 浏览器嗅探 
        - edge可以正常使用， Chrome 等不可以 开启了 https的应用才可以使用

- 传统登录 cookie + session -> token 登录 (localStorage)
    axios 拦截 authorization token
    1. cookie 维护用户状态
        克制，session_id uid
    2. cookie exprres/max age  domain  path
        http only  SameSite  Secure 
    3. session 服务器端
    4. session 基于cookie
        username password  seesion中间件  session对象 同时生成cookie对象
        sid -> 客户端也有sid cookie -> /post/save -> session中间件 -> 拿到cookie sid 
         -> 后端seesion内存空间 sid 作为key 去查找 会话对象里的存储 -> 