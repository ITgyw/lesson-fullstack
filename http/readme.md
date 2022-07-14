- node 和 es6 在模块化上可以共存
    1. react  es6+
        node cjs阶段
        js 优点就是前后端通吃 但cjs esm 代码风格不太OK，有点像两套代码
        不能接受

    2. 引入工程化解决
        babel 
        写的代码可以转变成能运行的代码
        @bable/core @babel/cli @babel/preset-env @babel/node
        babel.config.js:
            const presets = [
                ["@babel/env",
                    {
                        targets: {
                            edge: "17",
                            firefox: "60",
                            chrome: "67",
                            safari: "11.1",
                        },
                        useBuiltIns: "usage",
                    }],
            ];

            module.exports = { presets };
        npx babel-node 1.js 转义和运行

- web server
    在后端种cookie
        res.setHeader('Set-Cookie',['type=ninja', 'language=cn'])

    阿里国际站
        req.url == '/about'  当我们从/about 访问时
        自动带上cookie去访问在前端种cookie

    cookie 是一段文本 用于弥补http 无状态的缺陷 

    怎么理解http 无状态协议?
        1. Stateless 每次请求都是独立的， 没有相关性 简单
        2. 在HTTP1.0 版本（微软、博客）加了cookie 状态 
            cookie是一段文本 格式：key=value; key2=value2;
        3. 服务器和客户端都可以种cookie
            之后的每次请求中， 都会带上cookie 
            仍然没改变http 无状态
        4. 服务器端解析cookie 就可以获得用户身份了

- Cookie的属性
    不同的网站，访问时带上相应的cookie 是通过cookie的Domain(域名)来设置 自动带上
        百度种的和掘金种的就不一样
    path属性 除了Domain域名限定外还可以path路径限定 手动设置 默认/ 所有路径都可以访问
    Expires / MaxAge   Cookie 过期即删除
        Expires 时间戳   MaxAge 倒计时
    HttpOnly 
        安全性而来  值为true
        js 不能访问
    
