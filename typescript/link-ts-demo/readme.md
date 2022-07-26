- ts 项目npm 标配
    ts + node
    typescript  .ts -> .js
- ts 表面上看类型检测 多写代码，不自由 更好的自由，代码建议

- ts 运行的工程化 
    1. ts 后缀   不能直接运行(后端node 前端以DOM)
    2. npm i -g typescript
    3. tsc --init
        tsconfig.json ts编译文件

- 箭头函数  不适合做构造函数
    1. 没有独立的this 
    2. 缺少prototype __proto__
    3. 缺少arguments (...args) => { }
    4. 缺少caller 无法确定上下文
    console.dir 调试过 error
    

