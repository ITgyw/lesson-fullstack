String(4)
console.log(typeof String(null))
console.log(String(Symbol('s')));

// toString()
console.log(String({ a: 2 }));
console.log(String([1, 2]));
console.log([1, 2].toString()); // Array 重写toString方法 返回元素组成的字符串…
console.log({ a: 2 }.toString())

var arr = [1, 2]
// primitive 介入
arr.toString = function () { return this.join('/') }
console.log(String(arr));