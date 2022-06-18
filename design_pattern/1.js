// 单例
let CreateSingleton = (function () {
    // 多了一层作用域链
    let instance; // 实例
    return function (name) { // constructor
        if (intance) {
            return instance;
        }
        return instance = this;
    }
})()
let singleton = new CreateSingleton('hgb');
console.log(singleton.name);
