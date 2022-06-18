// js 没有类  占有对象
// 猫类 由 构造函数 new Object（）
var Cat = {
    // 构造函数  降低难度 不用prototype
    // 添加了一个属性 它的值是creatNew方法 es6 
    creatNew(name) {
        // 不需要 this 和 prototype
        var cat = {};
        cat.name = name;
        cat.makeSound = function () {
            console.log('喵喵喵')
        }
        return cat;
    }
}
// 猫实例
var tom = Cat.creatNew('小花');
console.log(tom.name); 
