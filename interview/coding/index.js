console.log(1); // 立马执行
setTimeout(() => { // 位于宏任务的立即执行
    console.log(2);
    process.nextTick(() => { //process node 微任务最高级别 
        console.log(3);
    })
    // 实例化 callback函数会同步运行
    // .then 异步的 
    //  内部的被resolve
    new Promise((resolve) => {
        console.log(4); // callback 同步的
        resolve()  // then函数 到event loop 可以执行了
        // then 返回的也是 promise实例
    }).then(() => { // event loop 微任务中 实例resolve时执行
        console.log(5);
    })

}, 10)
new Promise((resolve) => {
    console.log(7);
    resolve()
})  // 同步代码
    .then(() => {
        console.log(8);
    })
process.nextTick(() => { // 微任务
    console.log(6);
})

setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10);
    })
    new Promise((resolve) => {
        console.log(11);
        resolve()
    }).then(() => {
        console.log(12);
    })
}, 11)

// console.log(4);
// 1 7 6 8 2 4 3 5 9 11 10 12