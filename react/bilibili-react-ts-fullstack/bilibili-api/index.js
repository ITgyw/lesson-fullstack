// api 后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); //http server

const app = new Koa();

// 中间件函数
app.use((ctx) => {
    // body 设置http四部分中的响应体
    ctx.body = 'hello world'
})

app.listen(3300);