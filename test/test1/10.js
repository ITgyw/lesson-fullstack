const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr.join('').replace(/([0-9]{3})/, function () {
    // return `(${RegExp.$1})`;
    return `|${RegExp.$1}|`;
}))