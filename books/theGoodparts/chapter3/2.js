var obj = {}
Object.defineProperty(obj, 'x', {
    configurable: false,
    value: 1
});
delete obj.x;
console.log(obj.x)


// { a:1,b:2} 会报错

// var t ={ a:1,
//   b:2}

function boo() {
    var a = b = 1;
}
boo();
console.log(typeof a); // undefine   a 为局部变量
console.log(typeof b); //number  b 为全局变量



