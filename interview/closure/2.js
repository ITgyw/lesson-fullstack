// 立即执行函数
// 在模块化之前， JS 通过闭包实现模块化
var myModule = (function (window, undefined) {
    let name = 'echo';
    function getName() {
        return name
    }
    function setName(newName) {
        name = newName
    }
    return {
        getName,
        setName
    }
})(window)
