function flatten(arr) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))// 递归
        } else {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten([1, 2, [3, [4, 5]]]));