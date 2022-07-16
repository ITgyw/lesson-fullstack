// 应用层 只跟逻辑相关
const actions = ['rock', 'scissor', 'paper'];

module.exports = function (playAction) {
    if (actions.indexOf(playAction) == -1) {
        throw new Error('invalid playAction')
    }
    // console.log(playAction);
    // 电脑
    let computerAction;
    // floor向下取整
    let random = Math.floor(Math.random() * 3)  // 0 1 2
    // console.log(random, '///');
    computerAction = actions[random];
    // console.log(computerAction);
    if (computerAction == playAction) {
        console.log('平局');
        return 0;
    } else if ((computerAction == 'rock' && playAction == 'scissor') ||
        (computerAction == 'scissor' && playAction == 'paper') ||
        (computerAction == 'paper' && playAction == 'rock')
    ) {
        console.log('电脑赢了');
        return -1;
    } else {
        console.log('你赢了');
        return 1;
    }

}