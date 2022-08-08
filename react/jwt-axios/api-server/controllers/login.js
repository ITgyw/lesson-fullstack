const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js')

const login = (ctx) => {
    const { username, password } = ctx.request.body
    if (username === 'admine' && password === '123456') {
        // 给requset 颁发一个凭证
        // session 会话对象 cookie sid 交给request 每次请求带上sid
        // session -> 解析 cookie sid 
        const token = jwt.sign({ uid: 131456 }, config.secret, {
            expiresIn: 86400
        })// 签发一个token
        console.log(token);
        ctx.body = {
            code: 0,
            token,
            message: '登录成功'
        }
    } else {
        ctx.body = {
            code: -1,
            message: '账号或密码错误'
        }
    }
    console.log(ctx.request.body, '////');
    // ctx.body = `登录成功`
}
module.exports = {
    login
}