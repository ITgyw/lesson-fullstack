var arr = [1]

// 覆盖了原来的toString
arr.toString = function () { return '43' }
// console.log(arr.valueOf);
arr.valueOf = function () {
    return '42'
}
console.log(String(arr));
console.log(Number(arr))
var obj1 = {
    valueOf() {
        return '99'
    }
}
console.log(Number(obj1));