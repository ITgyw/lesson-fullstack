const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser');
const path = require('path')
const multer = require('koa-multer')
// const koaBody = require('koa-body');
const app = new Koa();
// app.use(bodyParser());
// app.use(koaBody({
//     multipart: true
// }));

// diskStorage 持久化存储
app.use(cors())
let storage = multer.diskStorage({
    destination: path.resolve('upload'),
    filename: (ctx, file, cb) => {
        cb(null, file.originalname)
    }
});
// 上传文件 中间件
let upload = multer({
    storage
})

router.post('/upload', upload.single('file'), async (ctx) => {
    console.log(ctx.request, '/////');
    ctx.body = ctx.request.body;
})
app.use(router.routes(), router.allowedMethods())
app.listen(8080);
