event loop 事件循环
- 全端的event loop 
    1. 前端
    2. node

- 主线程
    1 7 同步代码
    setTime1 进入到 event loop宏任务队列
    23行 then 进入 微任务
    process.nextTick 微任务  优先级高于promise
    setTimeout  宏任务

- 第一次 event loop 
    先微任务 整个队列 6 8 清空
    宏任务 队头出队  第一个setTime 2 4 同步 3 5 代表微任务进入event loop 宣告第一次eventloop结束了 进入idle状态

- 第二次 event loop 
    先微任务 整个队列 3 5 清空
    第二个setTime 出队 9 11 同步 10 12 代表微任务进入event loop 宣告第一次eventloop结束了 进入idle状态

- 第三次 eventloop
    先微任务 整个队列 10 12 清空
    
- 整个系统idle状态





     

