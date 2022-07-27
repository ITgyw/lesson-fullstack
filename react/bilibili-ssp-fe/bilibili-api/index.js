const koa = require("koa");
const app = new koa();
const cors = require("koa-cors")
const router = require('koa-router')();
const mainRouter = require("./routers/index")
const searchRouter = require("./routers/search")
const vedioRouter = require("./routers/video")
app.use(cors())
app.use(mainRouter)
router.use("/search", searchRouter)
app.use(router.routes())
router.use("/video", vedioRouter)
app.use(router.routes())
app.listen(3011, () => {
    console.log("Your app is running");
})
