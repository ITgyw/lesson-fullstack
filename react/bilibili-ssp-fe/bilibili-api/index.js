const koa = require("koa");
const app = new koa();
const cors = require('koa-cors');
const router = require('koa-router')();
const mainRouter = require('./routers/index');
const searchRouter = require('./routers/search');
const videosRouter = require('./routers/videos');
const rankingRouter = require('./routers/ranking');
const transferRouter = require('./routers/transfer');
// 挂载跨域中间件
app.use(cors());
app.use(mainRouter);
router.use('/search', searchRouter);
router.use('/videos', videosRouter);
router.use('/ranking', rankingRouter);
router.use('/transfer', transferRouter);
app.use(router.routes())

app.listen(1314, () => {
    console.log("Your app is running");
})