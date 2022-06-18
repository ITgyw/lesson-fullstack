function func(num) {
    // this 指向谁，this.count++就死谁的
    // 1. new的话 this-> 实例   约定 大写函数名作为构造函数标志
    // 2. 普通函数调用时指向  window  和 global  ； use strict
    // 3. call || applly
    this.count++; // 这里的count 是属于实例的不属于类
}

// func 是一等对象   count的属性是属于func自己的
func.count = 0; // 类的静态属性，不属于实例的
func(0); // 普通函数调用 
console.log(func.count); // 0 func.count和func(){}里的count一点关系都没有