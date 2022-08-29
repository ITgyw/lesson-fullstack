// 函数嵌套函数
// 闭包 词法作用域 及作用域链
// 运行时，沿着词法作用域，作用域链找到生成时 上下文环境中的变量
// 闭包函数是foo？还是bar？ Chrome调试面板来看
// 闭包是何时产生的?
// 
function foo() {
    let a = 2;
    function bar() {
        console.log(a);
    }
    return bar
}

let baz = foo(); //closure
baz() // 运行形成closure