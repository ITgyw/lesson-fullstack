// lib 库
var counter = 3;
function incCounter() {
    ++counter;
}
// 以对象形式输出
module.exports = {
    get counter() {
        return counter
    },
    // counter,
    incCounter
}