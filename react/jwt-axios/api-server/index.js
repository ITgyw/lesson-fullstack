// - post /login {username:'admine',password:'admine'}
// - 颁发token
//      session  ? cookie   传统 缺点
const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const authRouter = require('./routers/auth')
const testRouter = require('./routers/test')
const cors = require('koa-cors')

app.use(cors())
app.use(bodyParser())
router.use('/api/auth', authRouter)
router.use('/api/test', testRouter)
app.use(router.routes())
app.listen(1516)