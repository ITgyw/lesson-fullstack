// node api -> 框架层
// react 单页应用 MVVM 模式的项目  MOdel  View  ViewModel
// 后端的模式是MVC model(数据模型)  View(html)  C (controller)
// M V 是不能直接通信的 需要controller来管理(业务)

const Koa = require('koa'); // 最好用的node 后端框架
const app = new Koa(); // 把 web Server 看作 server app

app.listen(1314)
// use 启用一个中间件
// 中间件是一个函数
// async 支持异步
// ctx context 上下文环境
app.use(async ctx => {
    // 支持异步

    // ctx.body 给http请求设置响应体
    ctx.body = `hello world`;
})
app.listen(1318);