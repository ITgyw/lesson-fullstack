// 访问属猪的元素？ index
//arr[0]
//遍历？
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const len = arr.length;

// for(let i=0; i<len; i++){ //性能更好 面向机器
//     console.log(arr[1],i); //值 下标
// }

// let i = 0;
// for (let item of arr) {
//     console.log(item, i); // 可读性更好 业务代码 es6 
//     i++;
// }

// arr.forEach((item, index) => {
//     console.log(item, index)
// })

arr.map((item, index) => {
    console.log(item, index);
    // 相比于 forEach 会再加工
    return item + 1;
})
