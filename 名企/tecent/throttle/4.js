var obj = {
    hi: function () {
        console.log(this);
        return () => {
            console.log(this);
        }
    },

    sayHi: function () {
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
console.log('-----------');
let hi = obj.hi();// { hi: [Function: hi], sayHi: [Function: sayHi], say: [Function: say] }
console.log('-----------');
hi(); // { hi: [Function: hi], sayHi: [Function: sayHi], say: [Function: say] }
console.log('-----------');
let sayHi = obj.sayHi(); // 箭头函数无this，通过作用域链获得的是全局的this
console.log('-----------');
let fun1 = sayHi();
console.log('-----------');
fun1();  // Object [global]
console.log('-----------');
obj.say();  //{}