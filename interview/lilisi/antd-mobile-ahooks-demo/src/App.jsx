import React from "react";
// 虚拟列表
import { InfiniteScroll, List } from "antd-mobile";
import { useState } from "react";
import { mockRequest } from './mock-request'
// 无限活力
const App = () => {
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(true)
    async function loadMore() {
        const append = await mockRequest();
        setData(val => [...val, ...append])
        setHasMore(append.length > 0) // 没有数据了
    }
    return (
        <div>
            <List>
                {
                    data.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                    ))
                }
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}

export default App