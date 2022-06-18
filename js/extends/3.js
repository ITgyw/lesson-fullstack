function Animal() {
    this.species = '动物';
}

Animal.prototype.sayHi =
    function () {
        console.log('-------');
    }

function Cat(name, color) {
    // Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
// prototype 模式
// let ani = new Animal()
Cat.prototype = new Animal();// 将Animal的实例赋给Cat的原型对象

// 但是这样的话会将Cat的原型对象的构造函数constructor覆盖掉 如下：
//console.log(Cat.prototype.constructor); // [Function: Animal]
// 此时需要重新赋值Cat.prototype.constructor
Cat.prototype.constructor = Cat;
let cat = new Cat('大毛', '黄色');
console.log(cat.species, cat.sayHi());
console.log(Cat.prototype.constructor); //[Function: Cat]