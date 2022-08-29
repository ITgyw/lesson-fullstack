// 具象 爬楼梯问题
// n 阶楼梯 每次可以爬1阶或者2阶, 你有多少种不同的方法可以爬到楼顶
// - 递归
// 入栈
// 自顶向下
// 30 ? 29 + 28
// f(n) = f(n - 1) + f(n - 2)
/**
 * 
 * @param {number} n
 * @return {number}  
 */
const climbStaris = function (n) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    return climbStaris(n - 1) + climbStaris(n - 2);
}
console.log(climbStaris(30));
