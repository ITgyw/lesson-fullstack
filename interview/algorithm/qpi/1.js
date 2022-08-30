function fuulpermutate(str) {
    var result = [];
    // 退出条件
    if (str.length > 1) {
        for (var m = 0; m < str.length; m++) {
            var left = str[m]
            var rest = str.slice(0, m) + str.slice(m + 1, str.length)
            var preResult = fuulpermutate(rest)
            console.log(preResult, '////');
            for (var i = 0; i < preResult.length; i++) {
                var tmp = left + preResult[i];
                result.push(tmp)
                console.log(result, '----');
            }
        }
    } else if (str.length == 1) { // 退出条件
        result.push(str)
    }
    return result
}
console.log(fuulpermutate('abcd'))