// node api -> 框架层
// react 单页应用 MVVM 模式的项目  MOdel  View  ViewModel
// 后端的模式是MVC model(数据模型)  View(html)  C (controller)
// M V 是不能直接通信的 需要controller来管理(业务)

const Koa = require('koa'); // 最好用的node 后端框架
const app = new Koa(); // 把 web Server 看作 server app
const path = require('path') // 内置
// staticServer是支持静态服务的中间件
const staticServer = require('koa-static');
const koaSession = require('koa-session'); // 中间件

const session_signed_key = ["secret"]; // key

app.keys = session_signed_key;
const session_config = {
    key: 'koa:sess', /**  cookie的key。 (默认是 koa:sess) */
    maxAge: 1000 * 60 * 60,   /**  session 过期时间，以毫秒ms为单位计算 。*/
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
};
const session = koaSession(session_config, app)

// 使用中间件，注意有先后顺序
app.use(session); // 
// app.listen(1314)
// use 启用一个中间件
// 中间件是一个函数
// async 支持异步
// ctx context 上下文环境

// req => res 的中间件

// ctx = req + res

// 静态服务器 js css img file
app.use(staticServer(path.join(__dirname, './static')))

app.use(async ctx => {
    if (ctx.path == '/login') {
        const { userName, password } = ctx.query;
        // console.log(userName, password, '-----');
        if (userName == '123' && password == '123') {
            ctx.session.login = {
                name: userName,
                uid: 2,
                sex: '男',
                level: 2
            }
            ctx.type = 'html'
            ctx.body = `
              登录成功
              <a href="/testlogin">去测试登录</a>
              `;
        } else if (ctx.path == './testlogin') {
            console.log(ctx.session, '/////');
            if (!ctx.session.login.name) {
                ctx.redirect('/');
            }
            else {
                ctx.body = '已经登录' + ctx.session.login.name;
            }
        }
        // ctx.body = ctx.url;

    }

    // 后端种了一个cookie
    // ctx.cookies.set('uid', '12345678', {
    //     path: '/admin',
    //     maxAge: 1000 * 10 * 60,
    //     httpOnly: true
    // })
    // 动态数据
    // 支持异步

    // 数据库的查询
    // await db.find()

    // ctx.body 给http请求设置响应体
    // ctx.body = `hello world`;
})
app.listen(1318);