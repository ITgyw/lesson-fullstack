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

var func = obj.hi(); // 普通函数
// func.call(obj);
// 指定this 并且返回一个新的函数
// bind 为了稍后执行而准备  异步
func.bind(obj)()();// this->obj ,this->obj