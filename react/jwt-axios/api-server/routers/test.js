const controller = require('../controllers/test')
const auth = require('../middlewares/auth')
const router = require('koa-router')()

// 发表评论需要权限 accessToken 
// auth 中间件 抽离鉴权的功能， 封装到 middlewares
// 1. 把accessToken -> json uid
// 2. 任务继续交给comment 控制器  next  
// 3. 怎么拿到uid 
router.post('/comment', auth, controller.comment)
module.exports = router.routes()