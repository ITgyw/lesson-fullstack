// 依赖引入退后 用函数来封装
// 动态加载
let lists = ['./1.js', './2.js']
lists.forEach(url => require(url));// 不会引入

require(lists[0])