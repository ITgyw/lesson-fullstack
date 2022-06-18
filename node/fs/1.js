// 1. os (operation system)  fs
//     js  挺近后端开发
//     OS  fs:FileSystem
// 2. 路径
//     path 
//     1. js  内存-> fs.readfile ->I?O -> 硬盘 -> 文件 -> 读入内存
// node提供了内置 fs document.getElementById
const fs = require('fs');  // node js 关键字  也是 commonjs 模块化规范之一
// fs.readFile('./readme.md', function (err, data) {
//     if (!err) {
//         console.log(data.toString());
//     } else {
//         // console.log(err);
//         console.error(err);
//     }
// })

// 多个异步的任务要去完成  控制顺序怎么办？
const file = ['./a.txt', './b.tat', './readme.md'];
// 封装  抽象的 callback的数据类型是 function
function readFile(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(data);
    })
}

readFile('./readme.md', (data) => {
    console.log(data.toString(), '---------------');
    readFile('./a.txt', (data) => {
        console.log(data.toString(), '+++++++++++++++++');
        readFile('./b.txt', (data) => {
            console.log(data.toString(), '===========');
            console.log('工作完成')
        })
    })
})

// 异步的 编写顺序与运行顺序不一致
// file.forEach((file) => {
//     fs.readFile(file, function (err, data) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data.toString());
//     })
// })