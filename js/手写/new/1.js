function objFactory() { // new函数
    // Person 作为普通函数运行 如何来指定this的指向？ => call 或者 apply
    let obj = {};// 原型式面向对象 没有血缘关系
    // arguments伪数组  把shift方法借给arguments用
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    // 拿到Person运行的返回值 return{}
    var ret = Constructor.apply(obj, arguments);
    // 如果构造函数有返回值则拿到 没有就返回obj
    // return ret ? ret : obj
    return typeof ret === 'object' ? ret || obj : obj // 实例 
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    return null; //忽略
    // return {
    //     name,
    //     age,
    //     bb: '11'
    // }
}
function Dog(name, age) {
    this.name = name;
    this.age = age;
    return {
        name,
        age,
        bb: '11'
    }
}
let p = objFactory(Person, '国斌', 22)//引用式赋值
console.log(p);
let dog = objFactory(Dog, '小花', 1);
console.log(dog);
