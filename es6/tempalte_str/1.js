// 重复了 违反了 DRY（dont repeat yourself）
const name = 'Sner';
const age = 2;
// console.log('my dog ' + name + ' is ' + age + ' years old');
const name2 = 'Yner';
const age2 = 5;
// js 函数名首字母要大写
// 没名字函数为匿名函数  

// const sayMydog = function (name, age) {
//     //es6添加了字符串模板的功能
//     return `my dog  ${name} is ${age} years old`
//     // return 'my dog ' + name + ' is ' + age + ' years old';
// }

// 箭头函数 不需要function 关键字 return关键字也可以不要
// const sayMydog = (Name, Age) => {
//     //es6添加了字符串模板的功能
//     return `my dog  ${Name} is ${Age} years old`
//     // return 'my dog ' + name + ' is ' + age + ' years old';
// }

// 如果函数体只有一句代码，并且是返回值的话  连花括号也省掉
const sayMydog = (Name, Age) => `my dog  ${Name} is ${Age} years old`;

console.log(sayMydog(name, age));