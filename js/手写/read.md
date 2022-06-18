# 手写代码

instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
Object.getPrototypeOf

- web 编程基础是http协议  基于请求响应式简单协议
    1. lazyload.html  http 请求
    响应  html文件
    2. html 渲染的过程  html DOM  + css OM = 静态页面
    3. img 标签需要引入图片资源的标签 启动http 请求
        图片响应后， 显示在页面上
        多张图片 ，页面响应会比较多且大

- 如何优化多图片造成的网络请求堵塞，
    1. 请求数是打开速度性能的重要指标
        link href img  src audio video
    2. 启动network 下载   
    3. http协议  请求—响应   并发限制的


- 延迟加载
    1. img的 src 不改变
        显示一个默认占位图片
        原来src -> data-src  不需要并发n张图片
        只需要下载一张占位图片  浏览器对已经下载的资源会缓存Cash
    2. 监听 onscroll事件 图片  位于可视区


