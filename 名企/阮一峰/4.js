// 化实例化的繁为函数封装简单， 一定要用this？
// 构造函数。封装实例化过程，更加便捷

function Cat(name, color) {
    return {
        name: name,
        coclor: color
    }
}

let cat1 = Cat('Tom', '黑色');
console.log(cat1.name, cat1.color);