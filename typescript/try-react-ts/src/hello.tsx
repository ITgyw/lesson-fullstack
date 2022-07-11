// .jsx  -> .tsx
// App <- Hello
// 父组件 向 子组件提供props jsx输出
// 子组件打工的，props-types  拒绝裸奔
// 面向对象中，那个特性 来实现父子组件间的约定 负责？
// interface 接口
import * as React from 'react'
// 定一个接口， 在父子组件间用
// 子组件需要实现Props规定的接口属性和方法
// ts 语法能力的面向对象的能力更牛B
// ts 可以让我们像java 一样
// ts内置的interface
// 接口定义区域
interface Props {
    userName: string;
    age: number;
}

// 接口和组件结合 组件要实现接口
// HelloComponent 必须是个函数组件 React.FC
// props react认为是空对象{}
// 此时需要为函数组件加个泛型<>
// React.FC 类型定义由@type/react 提供
const HelloComponent: React.FC<Props> = (props) => {
    return (
        <h2>
            hello user: {props.userName}!
            <br />
            年纪： {props.age}!
        </h2>
    )
}

export default HelloComponent