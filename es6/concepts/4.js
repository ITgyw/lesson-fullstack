// 'use strict';
// 当箭头函数的时候，作为普通函数调用
// this 又有新方案
// 箭头函数没有this 能打印出window是因为通过作用域链查找到最外层全局有一个this
console.log(this, '-------')
const func = (a) => {
    // console.log(this);  
    return a;
}

// func(1);  