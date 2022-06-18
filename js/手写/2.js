/**
 * 面试中的编程题 写一个函数
 * dog 没有 通过Object 实例出来，应该通过原型链
 * dog.__proto__.__proto__.__proto__  ->  null   b是a的原型链上的对象
 * js 中 instanceof 运算符用于判断构造函数的prototype属性是否出现在对象的原型链中的任何位置
 * @func  instanceof 实现
 * @param  a 对象    b 对象
 * @return boolean
 */
function Cat() {

}

function Dog() {   // 构造函数

}

Dog.prototype.sayHi = function () {

}

const dog = new Dog;

function myInstanceof(a, b) {
    // 原型
    let proto = Object.getPrototypeOf(a);
    console.log(proto);
    let prototype = b.prototype;
    // if (proto == b.prototype) return true;
    // return false;
    while (true) {
        if (!proto) return false; // null 到头了  翻篇了
        if (proto == prototype) return true; // while  退出
        proto = Object.getPrototypeOf(proto);
    }
}

console.log(myInstanceof(dog, Dog));
console.log(myInstanceof(dog, Object));
console.log(myInstanceof(dog, Cat));