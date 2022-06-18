// 1. 数组和对象字面量，  类型都是Object，除了简单数据类型， 其他的都是对象
// 2. 数据容器
// 3. 数组是用整数做下标 范围0~length-1  
//    对象是key: value
// 数组是可比案例（索引）的对象
const arr = [1, 2, 3, 4, 5];
// console.log(Object.prototype.toString.call(arr));
// console.log(typeof arr);

console.log(Array.isArray(arr));


let obj = {
    name: '胡',
    sex: '男',
    hometown: '鄱阳'
}
console.log(typeof arr);
// callback 回调函数
// 
arr.forEach(function (item, index) {
    console.log(item, index);
})


// for (let i = 0; i < arr.length; i++) {
//      // 计数循环 更快 机器思维的代码  面向CPU编程
//     console.log(arr[i]);
// }

// // 可读性更好， 面向人类的编程，
// for (let item of arr) { // 新的es6 方案
//     console.log(item);
// }

// // for in 有点慢
// // for (let a in arr) {
// //     console.log(a)
// // }

// // 对象的遍历里面
// for (let key in obj) {
//     console.log(key)
// }