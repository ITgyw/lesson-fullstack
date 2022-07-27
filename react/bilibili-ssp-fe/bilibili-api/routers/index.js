const router = require('koa-router')();// koa 路由中间件 BrowserRouter 是个函数会返回routers对象
const partitionsData = require('../data/partitions')

router.get("/partitions", async (ctx) => {
    ctx.body = 'hello partitions'
})

module.exports = router.routes();