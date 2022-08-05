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

