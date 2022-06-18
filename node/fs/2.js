const fs = require('fs'); // node fs 是commonjs(普通js)的模块方案
const files = ['./a.txt', './b.txt', './readme.md'];
//嵌套
for (let file of files) {
    // 可以为读取文件停下来  实现同步的写法
    // 阻塞代码
    const data = fs.readFileSync(file); //Sync同步
    console.log(data.toString());

    // fs.readFile(file, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data.toString());
    // })
}