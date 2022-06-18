const fs = require('fs');

//stat 文件信息获取api
fs.stat('./a.txt', function (err, data) {
    if (err) {
        console.log(err)
        return;
    }
    console.log(data, '--------------');
})

const info = fs.statSync('./a.txt');
console.log(info);