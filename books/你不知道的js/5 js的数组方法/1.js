var arr = [1, 2, 3];
console.log(arr.join());// join 方法将数组转换成字符串
console.log(arr.join('-'));

console.log(arr.reverse()); // reverse 将数组逆序 
console.log(arr); // [3,2,1] 修改后 原数组也会修改 

function repeatString(str, n) {
    return new Array(n + 1).join(str);// n+1个元素 则有n个元素连接
}
console.log(repeatString('a', 3));

