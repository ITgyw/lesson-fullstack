// 编写一个函数， 他接受一个 由10个整数组成的数组（0-9）
// 返回格式式 （123） 456-7800的电话号码 字符串

// 思路：先将数组装换成字符串。再将字符串按字符串模板拼接

function creatPNumber(number) {
    number = number.join('');
    return `(${number.substring(0, 3)}) ${number.substring(3, 6)} - ${number.substring(6)}`
}
console.log(creatPNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))