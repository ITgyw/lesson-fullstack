- 面试算法
    1. 拿下动态规划 与react源码是一个级别的
        背包以及背包变种问题， 刷题， 贪心， 分治， 回溯 等算法的不同解题版本
- 刷题

- 动态规划
    面试算法中的大Boss
    算法思想，快排用的什么算法思想
    算法思想？ 公式， 或者一种策略， 太抽象， 具象， 用情景和刷题
        一个解题的套路, 非常好用， 好用到爆的套路

- 爬楼梯问题
    - 要求你给出达成某目的的解法个数 最值
    - 不要求你给出每一种解法的具体路径
    动态规划 
    1. 递归
        - 重复 细化类似给子问题
        - 退出条件
            f(1) = 1
            f(2) = 2
            f(3) = 
    核心？ 背
        倒着分析问题
        1. 定位到问题的终点
        2. 站在终点的这个视角， 思考后退的可能性

    f(n) = 走到第阶台阶这个目标对应的路径树 倒看
    一次只能后退一步 或者 两步
    f(n) = f(n-1) + f(n-2) 关系 表达式

    递归，关系用树形结构表示

    2. 记忆化搜索
        简单变量  数组  对象
        前端算法实现优化就可以了
        在递归的过程中不断地保存已经计算的结果从而避免重复计算的手法
        用空间换时间
    3. 转化为动态规划
        从递归而来 得到了状态转移方程
        f(n) = f(n-1) + f(n-2) 前提下
        换一种思想 自底向上的视角 来解决这个问题， 动态规划(倒车上山)
        递归(自身函数) 用迭代(while)

- 动态规划的分析技巧
    1. “自底向上” + 迭代
    2. 状态转移方程
        - 树形思维模型将帮助我们更快捷

