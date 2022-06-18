// 语言第四章   函数
// 当函数名大写，该函数就是构造函数
// js 函数就可以构造一个类
// js 早期没class 关键字， 但并不影响它做java的传统面向对象编程

function Cat(name) {
    // 构造函数 给一组对象添加属性
    this.name = name;

    //         给一组对象添加方法 方法有函数来实现
    // this.makeSound = function () {
    //     console.log('喵喵喵');
    //  }
}
// Cat是一个构造对象的函数 也是 对象 
// js 函数对象自带prototype 属性 能给Cat的对象添加方法
// 共有的方法放到prototype对象中·
Cat.prototype.makeSound = function () {
    console.log('喵喵喵');
}
Cat.sayHi = function () {
    console.log('你好啊');
}
// 同一组对象 共同类方法，属性模板
var xm = new Cat('小黑')
xm.makeSound();
xm.sayHi();// 结果为 无法使用sayHi方法 共有的方法放到prototype对象中
console.log(xm.name);


// var xh = new Cat('小花')
// console.log(xm == xh);
// // l判断两个对象是兄弟
// console.log(xm.constructor == xh.constructor);
// // Instanceof 判断对象是某类的实例
// console.log(xm instanceof Cat);
// // Object 在js 即是对象又是函数
// // 函数是一等对象，可以用来构造对象
// // js其实没有类
// let a = {}; //  对象字面量的构造函数 Object()
// let obj = new Object();
// console.log(obj instanceof Object);// 打印结果是 {  }即对象字面量
// console.log(typeof Object);// 打印结果是 function 
