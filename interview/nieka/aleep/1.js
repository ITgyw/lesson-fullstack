// js单线程 event loop 异步多任务，不支持sleep
// setTimeout + callback

let sleep = function (fun, time) {
    setTimeout(() => {
        fun();
    }, time)
}
let fun = () => {
    console.log('hgb');
}

sleep(fun, 2000)