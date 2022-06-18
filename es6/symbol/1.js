/**
 * @author yyy
 */
const o = require('./2.js');
// console.log(o);
// json 不允许出现同名的字符串式key
// 如何向对象添加绝对不重复的key？ Symbol

let newObj = {
    ...o,
    name: 'yyy'
}
console.log(newObj);
// 独一无二的
// let s = Symbol();
// console.log(typeof s);
// let s2 = Symbol();
// console.log(s == s2);// false

// let s3 = Symbol('foo');
// let s4 = Symbol('foo');
// console.log(s3 == s4);

// let  obj = {
//     name: '胡国斌',
//     age: 17
// };

