// 怎么创建数组
// -  数据结构  代码的优化是有意义的，
// -  平时开发中， 算法用的少一点
// -  面试？ 针对面试 去学习就可以？
// -  讲究效率 
// -  刷题 Leetcode  js

// 基本数据结构  访问第几个元素（行为）  时间复杂度O(1)
// const arr = [];  // easy way length  没定, items类型也没有定?  随意
// 使用构造函数， 可不是为了创建空数组那么无聊
// 相对于链表 数组比较易用  
// const arr = new Array(7); //[ <7 empty items> ]
// console.log(arr);

// const arr = (new Array(7)).fill(1);
// console.log(arr);
// const arr = [1, 2, 3];
// const arr1 = arr.concat([4, 5]);
// console.log(arr); //[ 1, 2, 3 ] 
// console.log(arr1); //[ 1, 2, 3, 4, 5 ]

const arr = [1, 2, 3, 4, 5];
const res = arr.filter((item) => {
    return item > 3;
})
console.log(res); //[ 4, 5 ]



