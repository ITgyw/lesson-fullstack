// js 单店入口
// require 属于node后端运行环境的关键字， 不支持浏览器前端运行环境
// js  不同运行环境下有差异
// 模块module化方案

// 
// commonJS 模块化方案  require + module.exports 只运行在服务器  输出是值的拷贝
// es6 模块化方案  import + export default 前端后端都可以 输出是值的引用
// commonJS 模块化方案 在输出后就结束了 不会对后端产生影响
var mod = require('./lib'); // require 关键字
console.log(mod.counter);
mod.incCounter();
console.log(mod.counter);