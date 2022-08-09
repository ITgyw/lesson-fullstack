const http = require('http')
const url = require('url');
const server = http.createServer((req, res) => {
    // query callback
    // 解析查询参数 path
    console.log(url.parse(req.url, true));
    const query = url.parse(req.url, true).query
    const callback = query.callback
    let data = {
        code: 0,
        username: '胡'
    }
    // 后端比以往的json请求
    // 把json包在一个callback函数内 
    // callback函数需要前端页面提前留好
    res.end(callback + '(' + JSON.stringify(data) + ' ) ')
});
server.listen(8888)