// 面向对象（OOP）的首要任务是封装，属性和方法，成为实例们的模板
// 猫 name  color
// const Cat = function(name,color){
//     this.name = name;

// }
let Cat = {
    name: '',
    color: ''
}
// 
let tom = {
    name: 'Tom',
    color: 'black'
}
let cafei = {
    name: '加菲猫',
    color: 'brown'
}
// 有什么缺点？
//     1. 写起来麻烦，没有构造函数， 可以把