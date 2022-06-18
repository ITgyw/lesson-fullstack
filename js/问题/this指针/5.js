// 1.简单数据类型 除了null 之外 结果都是靠谱的 
// null出问题的原因是 js 一直有bug
// 32位 二进制 +1 -1 值，拿出一位来作为符号位 1为正 0为负 
//  'a'的存储  二进制以ascii码  65 -> 二进制  拿出三位来 作为 数据类型位
// null    类型前三位 000 
// object  类型前三位 000

// console.log(typeof null);// null 简单数据类型 但打印结果是object 
// function func(a) {
//     console.log(a);
// }

// console.log(typeof func);

// console.log(typeof 1, typeof 'ss', typeof undefined, typeof false)

// 判断一个变量的数据类型是否是null
const isNull = val => val === null;

// undefine 已经声明了变量 但还未赋值 因为变量的类型由值决定
// null 类型已经确定了只是目前值为空 

const isNil = val => val === defined || val === null;
