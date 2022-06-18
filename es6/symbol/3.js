let s = Symbol(); // 独一无二的·
let s2 = Symbol();
console.log(s == s2);

let obj = {
    a: 1,
    [Symbol()]: function (arg) {
        console.log('----')
    },
    [Symbol()]: function (arg) {
        console.log('++++')
    }
}

// console.log(obj[s]());
// console.log(obj);
for (let key in obj) {
    console.log(key)
}
console.log(Object.getOwnPropertyNames(obj)); //返回的是字符串属性的Key
console.log(Object.getOwnPropertySymbols(obj)); // 以数组的形式返回Symbol的key
Object.getOwnPropertySymbols(obj)
    .forEach(item => {
        obj[item]();
    })


