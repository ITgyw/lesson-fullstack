// 只做路由的定义， 其他交给controller
// MVC  
const controller = require('../controllers/login')
const router = require('koa-router')()

// router.get('/login', ctx => {
//     ctx.body = 'login成功'
// })

router.post('/login', controller.login)

module.exports = router.routes()