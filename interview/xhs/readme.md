- flex 不用flex：1 比例化或主元素
    同时匹配width flex-shrink flex-grow
    精细化的分配收缩的比例

    父元素宽度不够 子元素收缩一下 flex-shrink 
    父元素宽度富裕 子元素膨胀一下 flex-grow
    flex-basis 基本宽度

    flex：1

    需要收缩的宽度是不变的 150
    shrink 比例的计算 [link](./flex/index.html)
    总收缩 300*1 + 150*2 + 200*3 = 1200
    每个元素的比列 300/1200 = 0.25
                  150*2/1200 = 0.25
                  200*3/1200 = 0.5
    每个元素的宽度 300-150*0.25 = 262.5
                  150-150*0.25 = 112.5
                  200-150*0.5 =  125

    flex-order 可以为负值 越小越在前[link](./flex/order.html)

- koa-cors 能跨域的原理是什么？[link](./koa_cors)
    - 当发生跨域的时候， 如果没有cors就会被同源策略限制
    - Access-Control-Allow-Origin:
        Access-Control-Allow-Method
    - 返回的响应头Access-Control-Allow-Origin： 
    - koa-cors 可以origin method 的配置
        如果为空，返回请求的域名作为允许

- 301 302 303 304 307 308 区别 
    3XX 重定向 
    301 Moved Permanently  308  Permanently Redirect
        请求的资源 URI 
    302 Moved Temporary  307 Temporary Redirect
        客户端任然使用原有的URI
    303 See Other
        登录完后，浏览器到另一个欢迎页面


    - 临时， 还是永久
    - 允许的Method 
    - 资源的访问 

    304 Not Modufied 
    协商缓存 
    HTTP 1.1 ETag

- 强缓存和协商缓存的区别
    - 强缓存， 如果缓存资源有效， 则直接使用缓存资源， 不必向服务器发起请求
        开启方式
        Expires(HTTP 1.0)  不精准  由于和系统时间进行比较，所以当系统时间和服务器时间不一致的时候，会有缓存有效期不准的问题
        Catch-Control(HTTP 1.1) 更精准的时间管理 max-age 偏移量
            - public 响应可以被任何资源缓存
            - private 只能被浏览器缓存
            - no-catch 不使用强缓存，需要与服务器验证缓存是否新鲜
            - no-store 禁止使用缓存（包括协商缓存），每次都向服务器请求最新的资源
            - max-age 缓存时间计算的方式是距离发起的时间的秒数，超过间隔的秒数缓存失效

- 如果命中了强制缓存，我们无需发起新的请求， 直接使用缓存内容， 如果没有命中强制缓存
    如果设置了协商缓存， 协商缓存就会发送作用
    命中协商缓存的条件 max-age= xxx 过期
                      no-catch  304 
- 使用浏览器缓存， 有什么优点？
    - 加快了客户端页面加载的速度
    - 减少多余的网络数据请求
    - 减少了服务器端的负担，提高了网站的性能

- 为什么需要浏览器缓存
    只要针对是前端的静态资源（js css image)，最好的效果是， 再发起请求后，
    拉取相应的简体字资源，并保存到本地， 如果服务器静态资源没有更新， 那么在
    下次请求时， 直接在本地读取，更新了，再次请求时，就到服务器拉取资源，并保存
    到本地。
    大大的减少了请求的次数， 提高了网站的性能（两端） cdn 内容分发系统
    https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg
    保存在cdn 服务器
    cdn服务器
    - static 静态资源 assets 根本不放在服务器上 （数据库， 用户）前端写的代码会单独部署
    - 拥有一圈一圈的节点
    - api 三个 1亿  1台服务器 负载均衡 nginx
        不是真正的服务器  api.baidu.com -> dns 解析
        负载均衡nginx 服务器上 管理所有的服务器矩阵 负载均衡算法
        （谁忙谁闲）
        1万台  服务器  云服务器动态分配服务器资源（物理服务器）
- 技术胖 nginx  负载均衡  cdn  dns

