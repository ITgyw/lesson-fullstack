// js 解决实例和类之间的关系
// js 在函数中引入了this  以new·方式运行 不需要返回对象（call constructor），
// 函数看过去更像 构造函数  this -> 实例化后的对象

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
// 2.js + 3.js cat1 和 Cat 之间是什么关系
let cat1 = new Cat('大毛', '黄色');
let cat2 = new Cat('二毛', '黑色');
console.log(cat1.construtor); //父子关系
console.log(cat1.construtor == cat2.construtor); // 兄弟关系
console.log(cat1.__proto__, cat1.__proto__ == cat2.__proto__);
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor);
console.log(cat1 instanceof Cat);
console.log(Cat.prototype.isPrototypeOf(cat1));//isPrototypeOf 该api 为是否为某实例化的对象父类

