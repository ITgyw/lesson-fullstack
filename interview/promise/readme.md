- promise 操作系统的一个概念相结合
    - 并发
    - 并行 parallelism  有多个CPU，一个淳朴有多个核心，同时执行多任务
- js是单线程，解决异步问题
    - 回调
        问题
        1. 回调地狱
            可读性
            1. 嵌套函数存在耦合性，一旦有所改的，就要全改
            2. 嵌套函数一多，很难处理错误
            try{}catch(e){}不好捕获具体异常
            3. 不能return
        2. 信任问题

- 在回调和Promise之后， async/await 之前
    来到了generator
    1. 函数内可以停止(异步)  yield await
    2. generator先运行， 得到迭代器
    3. 开始使用next手动迭代  对比async，async不需多运行，且自动迭代 
    4. next(值) 的值传给上一次的yield调用
    5. done：true 停下
- async await 
    async 就是将函数返回值 使用Promise.resolve包裹下,
    和then 处理一样
    - async await 异步终极解决方案
        比Promise优点， 处理then的调用链 代码清晰
    - 缺点是？
         性能降低 耗时长
对性能有要求： Promise.all
有依赖关系 async await

- Promise A+ 规范
    1. 封装Promise类，需要执行器 
    2. Promise会有三个状态 
        - Pending 等待
        - Fulfilled 完成
        - Rejected 失败
    3. 状态只能由 Pending -> Fulfilled
                 Pending -> Rejected
        改变不可逆
    4. 提供resolve，reject 方法
        then 
        onFullfilledCallback()
        onRejectedCallback()
        执行一下     
