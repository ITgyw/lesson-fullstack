// 原型式面向对象  缺点
// 学习成本有点大
// prototype
// es6 新的方案  减少学习成本
var Cat = {
    name: '大毛',
    makeSound: function () {
        console.log('喵喵喵')
    }
}

// var garfield = {
//     name: '加菲猫',
//     makeSound: function () {
//         console.log('喵喵喵');
//     }
// }

// var tom = {
//     name: 'Tom',
//     makeSound: function () {
//         console.log('喵喵喵');
//     }

var tom = Object.create(Cat);
// console.log(tom.name);
// tom.makeSound();
tom.name = 'Tom';
console.log(tom.name);
let obj = new Object; //任何一个对象都是由Object 
console.log(tom.__proto__);// 打印结果：{ name: '大毛', makeSound: [Function: makeSound] }
console.log(tom.__proto__.constructor);// 打印结果：Sound: [Function: makeSound] }

