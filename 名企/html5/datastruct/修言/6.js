// 栈  队列  数组   有什么关系？
// 1. FILO FIFO
// 2. 数组？ 开箱即用（push pop shift unshift)
//  栈（栈底push添加 pop删除 ）和队列（队头shift删除，队尾push添加）
//  栈和队列都是可以基于数组实现，操作都受限的特别数组

// array 添加元素的方法
const arr = [1, 2];
arr.push(3); //尾部
arr.unshift(0); // 头部添加
// console.log(arr.concat([3, 4]));
// arr.splice(1, 1)//切割 参数：第一个为下标 第二个为个数
// splice 还可以插队
arr.splice(0, 1, 4); // 第一个参数是开始下标 第二个是删除元素个数 第三个是添加的元素
console.log(arr);
