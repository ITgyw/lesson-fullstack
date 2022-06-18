// es6 reset 运算符
function sayHi(...args) {
    console.log(args);
    // console.log(x, y);
    // 函数里有 this，arguments
    // console.log(arguments);
    // this 指向
    // 严格模式   this  没什么 undefined
    // 宿主环境   window   ||   global
    // 手动的绑定this
    console.log('Hello', this.name);
}


let yf = {
    name: 'hgb'
};
// 能用.来调用 说明函数sayHi也是对象  有 call方法
// 第一个参数 指定this 其余参数交给函数本身作为参数
// sayHi.call(yf, 1, 2, 3, 4);  //  让普通函数运行， 但是指定this指向
sayHi.apply(yf, [1, 2, 3]); // apply 第二个参数只接受数组
