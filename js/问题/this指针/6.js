// number 类型  但是要排除掉NaN
const isNumber = val => typeof val === 'number' && val === val;
// NaN: not a number
console.log(typeof NaN);// 打印结果：number
console.log(NaN == NaN); // 打印结果 ：false
