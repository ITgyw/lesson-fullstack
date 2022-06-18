// es6 可以给函数默认值
function Person(name = '未命名', age) {
    // this.name = name || '未命名'; //undefine 为假  '||'运算符第一个为假时就会执行后面的值
    this.name = name;
    this.age = age;
}

// 面向对象里， 类的静态属性 static 是描述类的 而不是表述实例的
Person.count = 0; // count是类的，构造函数的
Person.species = '人类';
Person.prototype = {
    num: 1
}

let sm = new Person();
console.log(sm.num)
// console.log(sm.name);
// let xm = new Person('小美');
// console.log(xm.name);