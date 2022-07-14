// 写后端代码， 稳定和性能为主 在服务器端node版本更新没那么快
// 所以服务器后端还在用滞后common js 模块化
// 又 前端有 webpack vitejs 现代化  发展比node快多了 所以全面es6 模块化
// const http = require('http');
import http from 'http'

// 使用http内置createServer方法返回server服务 在3000端口启动web服务 
// 伺服状态
// JS是单线程  web服务天生是多线程的
// 服务器CPU是多核的，每核都可以独立运行
// node是异步的 事件型的
const server = http.createServer(
    (req, res) => {
        if (req.url == '/about') {
            res.end('about us')
        }
        res.setHeader('Set-Cookie',
            ['type=ninja', 'language=javascript'])
        res.end('hello world')
    }
)
server.listen(3000)

