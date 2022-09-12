import React from 'react'
import FixedSizeList from './FixedSizeList'
function Item({ style, index }) {
    return (
        <div
            className='item'
            style={{
                ...style,
                backgroundColor: index % 2 === 0 ? 'blue' : 'yellow'
            }}
        >
            {index}
        </div>
    )
}
export default function App() {
    // const d = new Date()
    // console.log(d);
    const list = new Array(10000).fill(0).map((item, i) => i)
    // console.log(new Date() - d);
    return (
        <div>
            列表项高度固定 - 虚拟列表实现
            <FixedSizeList
                //指定虚拟列表高度为300
                containerHeight={300}
                itemCount={list.length}
                // 项列表的高度
                itemHeight={50}
            >
                {Item}
            </FixedSizeList>
        </div>
    )
}
