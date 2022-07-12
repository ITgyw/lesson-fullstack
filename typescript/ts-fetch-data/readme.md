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

- change事件的typescript 化
    1. e:React.ChangeEvent<HTMLInputElenment> 来自@types/react
    2. 子组件向父组件 报告 调用函数
        复杂性带给父组件
    3. 父组件 接收子组件 传过来的value 
        子组件 onChange 语义改成 onNameUpdated
        中转一下

- typescript 中架构多了一个model 

1. 父子组件传递时的接口
2. 前后端有接口
3. 组件 数据流

- any 
    keyof Color 值的范围  
- typescript 有何魅力
    1. 增强语言能力
        interface 泛型 type keyof 
        强类型
    2. 编译能力 
        编写边编译
    3. 代码建议
    4. 开发更快
        多写了代码 让代码少出bug
        减少了调试, 改bug时间
    5. 有很多现成的类型定义文件 @types/react

- typescript 怎么取巧呢？
    1. any
    2. 快速修复一下

- api typescript 比较复杂
    1. api 的使命是返回数据的，返回的数据要符合模型的定义
        根据table 列 来定义
    2. 每个模块都会对应一个table modle 模型定义文件 interface
    3. 接口是一个异步返回的是一个Promise
        :Promise<MemberEntitty>
        每处Promise都得写清楚

- 封装了一个hook 函数 
    1. 每一个hook 都有使命  函数功能封装
    2. useEffect useState 是react内置的hook函数
    3. useNAVigate  react-router-dom 内置
    4. useMemberCollection 的hooks
    5. 状态声明(useState) 和接口请求 被封装到useMemberCollection内部去了
    