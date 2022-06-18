// == 类型转换 === 判断相等 前提是简单数据类型
console.log(0 == 0); //true
console.log(-0 == +0); //true
console.log(-0 === +0); //true
console.log(1 == true); // js弱类型语言， 相等判断的同时 ， 先去做了类型的转换
console.log(1 === true); // 不会做类型转换
console.log(3 == true); //  谁转谁 ？ 规则:优先数值转换
if (3) {
    console.log('----------')
}
console.log(0 == false);
console.log(null == undefined); // 
console.log(null === undefined); // 两端同时转换为false 再判断
console.log({} == {}) // false


