// const { concat } = require("lodash");
// es6 版本里如何  扁平化？ 

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        console.log(arr, '////');
        arr = [].concat(...arr);
    }
    console.log(arr)
}
flatten([1, 2, [3, [4, 5]]]);