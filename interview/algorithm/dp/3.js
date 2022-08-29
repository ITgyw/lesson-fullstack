/**
 * 
 */
const climbStaris = function (n) {
    // 动态规划
    // 1. 自底向上
    // 2. 已经搞过了递归，状态树总结出来了状态转移方程
    const f = [];
    f[1] = 1;
    f[2] = 2;
    // 迭代 1 2 3 4 
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]
    }
    // f[3] = f[2] + f[1]
    // f[4] = f[3] + f[2]
    // ....
    return f[n]
}
console.log(climbStaris(130));