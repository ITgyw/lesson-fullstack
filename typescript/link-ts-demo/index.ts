const flag: string[] = ["1", "2", "3"];
console.log(flag.map(item => item.toUpperCase()))
// 元组类型
const flag1: [string, number, boolean] = ["hello", 1, true];
// enum 枚举
enum Color {
    RED,
    PINK,
    BLUE
}
const color: Color = Color.BLUE; // red,pink,blue
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

const sym1 = Symbol("hello");
const sym2 = Symbol("hello");
console.log(Symbol("hello2") === Symbol("heelo3"))