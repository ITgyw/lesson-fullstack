const path = require('path')// 使用common.js 模块方案，引入path内置模块
// 物理路径
// console.log(__dirname)

// console.log(path.join(__dirname, 'dist'))
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}