// 立即执行函数
// 1. 匿名函数
// 2. 我们也没有把它赋值给变量
// 3. 直接执行  立即执行
// 函数 this -> 运行环境  作用域  作用域链的概念
(function () {
    // console.log('立即执行')
    let a = 1;
    let ret = 0;
    let res = 0;
    // 执行栈  JS 运行  
    // 将add函数入栈 
    // 运行add函数 得到返回值， 并修改ret 值
    ret = add(3, 5);
    // 执行流程 回到了 匿名函数中
    // 栈懂得出栈出栈
    res = a + ret;
})()
// 匿名函数的出栈出栈  执行栈回归全局
// 全局栈也出栈， 代码运行结束


function add(x, y) {
    let sum = 0;
    sun = x + y;
    return sum;
}