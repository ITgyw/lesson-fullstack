let a = 1.236;
// 奇怪的地方？ JS比较复杂
// a number 简单数据类型  不是对象
// 在js 中，基于对象（object-base）的语言
// 你遇到的东西几乎都是对象 
// console.log(a.tpfixed(2))   // 取小数位的api 把a当做对象使用
// console.log(typeof null); // null 是 JS的bug
// console.log(typeof a , 0.1+0.2);
var n1 = new Number(2); // 
console.log(n1, typeof n1, n1.valueOf()); // Number会将n1包装成一个对象