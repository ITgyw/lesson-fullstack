缓存 catch  并不是storage
- 前端  后端  运维
    - 前端性能优化
        1. 防抖节流  手写
        2. 路由懒加载  react
        3. memo usememo useCallback  react
        4. GPU  css 
        5. antd 按需加载
        6. http请求数量 前后端通信  网络
        7. 启用GZip 压缩
        8. catch 
            logo 缓存
- react 优点和缺点？
    缺点： 首页加载慢

1. 200 第一次请求  服务器返回文件
    如果强缓存， 服务器会设置Exipres响应头 过期时间 HTTP1.0
        用户系统时钟不对的话 
    HTTP1.1  优化 Catch-Control  把过期时间设置偏移量 
    万一过期前， 有更新呢？ 换url ， avatar.jpg  new_avatar.jpg
    工程化：打包hash  main.121212abcdev.js

2. 数据接口 协商缓存， 写入较频繁的文件
    响应头？ 掘金首页列表
    每次浏览情器都要和服务器协商
    浏览器带什么过来  服务器返回什么？


