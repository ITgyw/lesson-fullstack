- typescript 是 js的超集
    1. ts 可以提供类型化的js
        let ch:Person
            ch.name
            ch.sex

- 如何使用ts完成组件UI开发
    1. 后缀为.tsx
    2. prop-types可以下课了
        用语言本身来打理
    3. 子组件接住父组件的props传递
        - 接口 interface
            可以在子组件里定义
            定义语法：ts 提供的高级面向对象功能  传统的面向对象思想
    4. HelloComponent: React.FC<Props>
    <>  泛型 泛指内部的类型 关心的核心 props:Props
    5. ts如java 先编译 在运行的 
        js 是脚本语言 node 1.js
        前端的一些问题，在开发阶段就会暴露出来
        props 问题