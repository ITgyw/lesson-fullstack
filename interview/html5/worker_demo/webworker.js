// 新线程 dom 变成不可以 耗时 ， 计算类 复杂的功能
// console.log(document.getElementById('result'));
let i = 0;

function timeCount() {
    i = i + 1;
    postMessage(i) // 子线程向主线程汇报
    setTimeout(timeCount, 500);
}

timeCount()