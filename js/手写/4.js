// 如何去重
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]; // 有重复项
// call 摇人 指定函数thi-> 第一个参数
// call 借
// console.log(typeof array, Object.prototype.toString.call(array));
// console.log(Array.isArray(array))
const uniqueArray = (arr) => {
    let res = [];
    // 以空间换时间
    let map = {};
    for (let i; i < arr.length; i++) {
        let temp = arr[i];
        console.log(temp);
        if (!map.hasOwnProperty(temp)) { // O(1)
            map[temp] = i;
            console.log(temp);
            res.push(temp);
        }
        // if (res.indexOf(arr[i] == -1)) { // O(n)
        //     res.push(temp);

        // }
    }
    return res;
}
console.log(uniqueArray(array));