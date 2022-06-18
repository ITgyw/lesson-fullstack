// call(thisObj,parmam1,parmam2...)
// 手写 call 方法 属于函数
// 函数关键字
Function.prototype.call2 = function ( ...args) {// 使用prototype添加call2方法
    // console.log('call2', thisObj, args);
    let thisObj = args[0] ? args[0] : null;
    // console.log(args.slice(1));
    // args.shift();  // shift api 是删掉第一个元素  unshift 添加第一个元素
    // console.log(args);
}
let hgb = {
    name: '胡国斌'
}
function func() {

}
func.call2(hgb, 1, 2, 3);
// console.log(func instanceof Function); // 打印结果： 
// console.log(Function); //打印结果：[Function: Function]