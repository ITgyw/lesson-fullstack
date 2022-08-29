//  硬币问题
// 最优解 用动态规划
//  - 工具
//  1. 递归
//  - 最后， 终局思维  11
//  - 倒推 后退

//  2. 树形结构
//  3. 观察它， 状态转移方程
//  4. 迭代 自底向上  推导出 最后的结果

const coinChange = function (coins, amount) {
    const f = []
    // 提前定义已知情况
    f[0] = 0;
    // 迭代[1,amount]这个区间的硬币总和
    for (let i = 1; i < amount; i++) {
        f[i] = Infinity;
        // 循环硬币每个可用的面额
        for (let j = 0; j < coins.length; j++) {
            // 可以凑成
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1);
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1
    }
    return f[amount] //最值
}

console.log(coinChange([1, 2, 5], 11));