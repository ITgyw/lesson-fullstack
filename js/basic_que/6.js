console.log(4 + [1, 2, 3]); //41,2,3
// [1,2,3]是对象 对象上有.toString方法
// console.log(typeof [1, 2, 3, 4]);
console.log('a' + + 'b'); //aNaN
console.log(4 * '3'); //12
console.log(4 * []); // 0
console.log(4 * [1, 2]); // NaN
console.log(Number.isNaN(+ 'a')); //ture
console.log(+[]); // 0
console.log(+[1, 2, 3]); // NaN

