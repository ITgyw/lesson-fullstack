const cluster = require('cluster'); // node 多核功能
// http 服务器 1314 或者 ngnix (未来的服务代理 天生多线程) <- 80 Proxy
// www.baidu.com/a/b  -> dns ip -> nginx 服务器 80
// location /
//     {
//         proxy_pass  http://127.0.0.1:1314
//     }

// 一台服务器的多线程 功能
const numsCPUs = require('os').cpus().length;
// console.log(numsCPUs);
const http = require('http')

// 管理
if (cluster.isMaster) {
    console.log(`主进程${process.pid}正在运行`);
    for (let i = 0; i < numsCPUs; i++) {
        cluster.fork(); // 每个CPU 就像主进程一样来工作  
    }
} else {
    // 工作进程可以共享TCP/HTTP服务
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=UTF8' });
        res.end("你好\n");
    }).listen(8000);
    console.log(`worker进程${process.pid}已启动`);
}