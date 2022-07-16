// 输入输出 设备打交道
// 引入文件
const game = require('./game.js')

let winCount = 0; //计算赢得次数
// 进程 隔离资源的最小单元   A B C D  ？ 进程的切换 中断   
// on 监听了一个on data事件 buffer：二进制流
process.stdin.on('data', (buffer) => {
    // json, node c++  buffer  格式
    // console.log(buffer, buffer.toString()) // 二进制缓存


    const action = buffer.toString().trim(); // trim 去除空格
    const result = game(action); // 用户的输入交给游戏逻辑 并告诉我赢了还是输入
    if (result == 1) {
        winCount++
        if (winCount >= 3) {
            console.log('不玩了.....');
            // 进程结束api exit 
            process.exit()
        }
    }
})