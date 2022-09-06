console.log(10 / '2');
console.log('10' / '2');
var obj = {
    valueOf() {
        return '10'
    }
}
console.log(100 / obj); // 隐式类型转换 遵守强制类型的规则 primitive toString

