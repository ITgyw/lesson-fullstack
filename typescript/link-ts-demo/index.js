var flag = ["1", "2", "3"];
console.log(flag.map(function (item) { return item.toUpperCase(); }));
// 元组类型
var flag1 = ["hello", 1, true];
// enum 枚举
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var color = Color.BLUE; // red,pink,blue
// react  `
//     <div>
//         <ComponentA>
//         <span></span>
//     </div>
// `
// HTMLElement.
// 1. 全栈型项目
// 2. react 源码
// 3. 算法
// 4. 面试题
var sym1 = Symbol("hello");
var sym2 = Symbol("hello");
console.log(Symbol("hello2") === Symbol("heelo3"));
