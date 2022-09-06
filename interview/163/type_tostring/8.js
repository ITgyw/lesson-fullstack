console.log(1 + '1') // string
console.log('1' + 1);
// 当+有一个对象的时候 拼接
console.log(1 + {}); //1[object Object
console.log('1' + {}); //1[object Object
console.log(1 + []); // 1

var obj = {
    valueOf() {
        return '1'
    }
}
console.log(1 + obj);

var obj2 = {
    toString() {
        return 3
    }
}
console.log(1 + obj2);