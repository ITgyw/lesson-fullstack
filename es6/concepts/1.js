// 本身  内部暗流涌动
// 两个世界  函数[call]  构造函数[constructor]
// [call] 指向全局
// [constructor]  this 指向实例  默认返回值{ return this；}
'use strict'; // 严格模式
function Dog(type) {
    console.log(this);  // 普通函数在严格模式下 this 指向 undefined
    this.type = type;
}

// 心流时刻
// 函数都有this 不管它是以什么方式运行
// this 是一个指针  和运行方式有关
Dog(); // 普通函数  this与运行环境有关 指向node后端 global对象 
// new  是运算符关键字 
let dog = new Dog();  //this 指向实例化后的对象  用new方式运行就作为构造函数使用

