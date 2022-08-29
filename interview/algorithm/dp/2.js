// 怎么解决？ 
// 空间换时间
// f[n-2] = value
// 记忆化搜索
const f = []
const climbStaris = function (n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    if (f[n] == undefined) f[n] = climbStaris(n - 1) + climbStaris(n - 2);
    return f[n];
}
console.log(climbStaris(130));