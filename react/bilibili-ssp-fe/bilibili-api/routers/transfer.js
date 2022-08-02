const router = require("koa-router")();

const fetch = require('node-fetch');

router.get('/image', async (ctx, next) => {
    // ctx.body = 'image'
    const url = ctx.query.pic
    // ctx.body = url;
    // 后端就去访问图片 丢掉浏览器思维，Http协议思维
    // 请求头 和 浏览器就不一样
    // 白名单 接入机制。。。
    const res = await fetch(url); //B站的图片服务器接受你
    const data = await res.buffer(); // fetch后是二进制流 需要buffer一下拼成图片
    console.log(res);
    // 在响应头中添加Type 更好的告诉前端这是一张图片
    ctx.set('Content-Type', 'images/jepg');
    ctx.body = data
})

module.exports = router.routes();