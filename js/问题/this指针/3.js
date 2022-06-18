var obj = {
    // es6对象字面量的简写方法 
    hi() {
        // this 作为对象方法调用 指向obj
        //
        console.log(this);
        // hi函数的返回值是函数，该函数被称为高阶函数
        // 是个箭头函数
        return () => {
            console.log(this);
        }
    },
    sayHi() {
        return function () {
            console.log(this);

            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}
// const func = obj.hi;
// // func(); // 普通函数调用
// 返回  箭头函数时  this->window
// const innerFunc = func();// 运行func（）返回得到箭头函数 
// innerFunc();// 再添加（）使箭头函数运行
// // 返回  箭头函数时  this->obj

obj.hi()()