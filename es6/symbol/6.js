const spread = [12, 5, 8, 8, 130, 44, 130];
// index 下标
const uniqreArr = spread.filter((item, index, arr) => {
    return arr.indexOf(item) == index;
})
console.log(uniqreArr);
// es6 新的数据解构
let set = new Set(spread); // 

const arr = [...set]; // set 不是一个数组 用... 展开运算符将set转换成一个数组
console.log(Object.prototype.toString.call(set), arr);
console.log(arr);

// 不要重复造轮子
