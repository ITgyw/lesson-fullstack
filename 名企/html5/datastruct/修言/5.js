// 二维数组 i j  冒泡排序
const outerlen = arr.length;
for (let i = 0; i < outerlen; i++) {
    const innerlen = arr[i].length;
    for (let j = 0; j < innerlen; j++) {
        console.log(arr[i][j], i, j);
    }
}