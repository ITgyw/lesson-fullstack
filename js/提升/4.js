// 4.js 执行权  内存中
// 去硬盘 走一招  等  路程
// 异步的 
const fs = require('fs'); // fs fileSystem  硬盘  node 内置模块
fs.readFile('./1.js', function (err, data) {
    console.log(data.tiString());
})
console.log('222222');