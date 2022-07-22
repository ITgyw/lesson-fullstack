// api 后端服务的单点入口文件 src/main.tsx
const Koa = require('koa'); //http server
const router = require('koa-router')();  //koa 路由中间件 BrowserRouter
const app = new Koa();
// /xideo  get  [{}]
router.get('/getVideos', ctx => {
    const videos = [{
        id: 1,
        name: '死缓就是缓一缓再死吗？为什么要有死缓？',
        pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
    }, {
        id: 2,
        name: '死缓就是缓一缓再死吗？为什么要有死缓？',
        pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
    }, {
        id: 3,
        name: '死缓就是缓一缓再死吗？为什么要有死缓？',
        pic: 'https://www.bilibili.com/video/BV1nt4y1p78J?spm_id_from=333.851.b_7265636f6d6d656e64.1'
    }];
    ctx.body = videos
})

app.use(router.routes())
// ctx = req 用户请求 + 中间件{n} +  res响应请求
// 中间件函数
app.use((ctx) => {
    // body 设置http四部分中的响应体
    ctx.body = 'hello world'
})

app.listen(3300);