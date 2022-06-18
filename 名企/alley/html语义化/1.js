// 传统的面向对象  { 对象字面量  }
// class 是es5的后期提供的   js 原来并没有类

class Cat {
    //constructor 构造器 
    constructor(name) {
        this.name = name;
    }
    // 对象的方法
    makeSound() {
        console.log('喵喵喵');
    }
}

const xm = new Cat('小黑');
xm.makeSound();