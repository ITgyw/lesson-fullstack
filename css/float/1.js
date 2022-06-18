// 数字太大  会超出计算效果
let a = 12463783992737226378398111111111111111111111111n;  // number?
// console.log(a + 1); // 数字太大超过计算范围
// console.log(0.1 + 0.2); // 小数相加 js的number（数值类型） 没有特定的数值  都是二进制位表达
// console.log(typeof a); // bigint 
let b = BigInt("12676361736123836713612837828878687");
// console.log(b);
console.log(a + b);

console.log(1n + 2n); //3n
// console.log(5n / 2n); //2n 不正确

// console.log(5n + 1); //Cannot mix BigInt and other types 不能混用 
// 只能类型转换

// 隐式类型转换
console.log(true + 1); // 2
console.log('1' + 1); // 11

// 强制类型转换 Number  BigInt 互相转换
console.log(5n + BigInt(1));
console.log(Number(5n) + 1);

console.log(+ '1');
// console.log(+ BigInt(1));  // 报错



