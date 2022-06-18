function add(a, b, c) {
    return a + b + c;
}

// 三个参数每次只能给一个

// 函数的柯里化
/**
 * 
 * @param {function} fn 
 * @returns function
 */
function curry(fn) {
    // 函数嵌套函， 内部函数会被返回到外部 并得以执行
    // 闭包中
    // 慢慢收集拿到参数
    // fn等在闭包空间里的永生变量在被闭包函数声明时已经存在
    // 声明返回函数时期
    let judge = (...args) => {
        if (args.length == fn.length) return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }
    return judge
    // 函数运行时可以访问到声明时的变量 如fn

}

// 得到被闭包的函数
let addCurry = curry(add) // 是curry 执行后会返回一个函数
// 执行函数
console.log(addCurry(1)(2)(3));// 一次接收一个参数 直到接收到的参数等于add需要的参数数量 执行 并返回结果
