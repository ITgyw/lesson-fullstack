// JSX UI 
// state props
import React, { Component, useState } from 'react'
import Child from './Child'

// 函数式编程思想 js 主流 闭包
// 类式组件太传统 长的没有意义
// 为了面向对象而面向对象 this
// 全面函数组件 + MVVM 钩子函数
const Father = () => {
    // js 逻辑
    // 难点就在hooks 原理 业务经验
    const [count, setCount] = useState(0)
    return (
        <>
            父组件
            <Child count={count} />
        </>
    )
}
export default Father