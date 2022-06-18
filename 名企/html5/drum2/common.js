// keydown event name -> window
window.addEventListener('keydown',
    function (event) {// 回调函数
        // 键值
        let keyCode = event.keyCode;//按键事件的数据
        // console.log(keyCode);
        let audioEle =
            document.querySelector(`audio[data-key="${keyCode}"]`);
        if (!audioEle) return;
        audioEle.play();

        let keyEle =
            document.querySelector(`.key[data-key="${keyCode}"]`);
        if (!keyEle) return;
        keyEle.classList.add('playing'); // add （'类名'） api 添加一个类名

        // 定时器
        // setTimeout(function () {  //setTimeout 定时器 两个参数分别是 函数 + 定时时间（单位ms) 
        //     // console.log('-----------')
        //     keyEle.classList.remove('playing');// remove（'类名'） api 移除一个类名
        // }, 500)
    })

const keys = document.querySelectorAll('.key');
// document.querySelector('.key')是选中keys中的第一个key
// document.querySelectorAll('.key')是选中keys中的所有的key
for (let key of keys) {
    // console.log(key);
    // event 一个个加， 不能给集体加
    key.addEventListener('transitionend', function (event) {//监听transitionend事件 即等过渡效果完成之后
        // console.log(event, '-----------')
        // 不同类型的事件 event对象也是不同的
        event.target.classList.remove('playing');




    })
}
