// 传统的面向对象
// 类是对象的属性和方法模板  抽象
// class Dog {
//     // 构造函数
//     constructor(type, color) {
//         this.type = type;
//         this.coclor = color;
//     }
//     makeSound() {
//         console.log('汪');
//     }
//     eat() {
//         console.log('骨头来一根');
//     }
// }


// js 原型式的面向对象
function Dog(type, color) {
    this.type = type;
    this.color = color;
}

// 任何函数都有prototype对象  方法
// Dog.prototype  与 xh  smy 什么关系？  是实例共享的方法
// Dog.prototype.makeSound = function () {
//     console.log('汪');
// }
// Dog.prototype.eat = function () {
//     console.log('骨头来一根');
// }

Dog.prototype = {
    makeSound: function(){
        console.log(`%{this} 汪汪`);// this指向实例化的对象：xh smy 
    },
    eat :function () {
        console.log('骨头来一根');
    }
}

// 1. 把构造函数运行了一下
// 2. 以 new 的方式运行 this 指向对象（xh smy）

const xh = new Dog('金毛', '黄色');
const smy = new Dog('萨摩耶', '白色');
console.log(xh.type);
console.log(xh instanceof Dog);
console.log(xh.__proto__.constructor);
// 私有属性 
// 实例对象都有一个__protr__ 指向构造函数的prototype对象
// xh 构造器有没有相应的属性  可以去原型（prototype）对象上找
// xh 没有prototype对象 而是Dog有prototype对象
console.log(xh.__proto__, '-------');
// 打印结果：{ makeSound: [Function (anonymous)], eat: [Function (anonymous)] } 

//
