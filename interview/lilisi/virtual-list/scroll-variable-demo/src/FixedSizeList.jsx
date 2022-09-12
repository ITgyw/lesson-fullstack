import { useState } from 'react';
import { flushSync } from 'react-dom'
function FixedSizeList({ containerHeight, itemHeight,
    itemCount, children }) {
    const [scrollTop, setScrollTop] = useState(0)
    const Component = children;
    const items = [];
    // 可视区域 起点下标  
    let startIdx = Math.floor(scrollTop / itemHeight);
    // 可视区域 终点下标
    let endIdx = Math.floor((scrollTop + containerHeight) / itemHeight)
    const paddingCount = 2;
    startIdx = Math.max(startIdx - paddingCount, 0)
    endIdx = Math.min(endIdx + paddingCount, itemCount - 1)
    for (let i = startIdx; i <= endIdx; i++) {
        items.push(<Component key={i} index={i}
            style={{ height: itemHeight }} />)
    }
    const top = startIdx * itemHeight;
    const contentHeight = itemHeight * itemCount
    return (
        <div style={{ height: containerHeight, overflow: 'auto' }}
            onScroll={
                (e) => {
                    // 处理渲染有导致的白屏问题
                    // 改为同步更新
                    flushSync(() => {
                        setScrollTop(e.target.scrollTop)
                    })
                }
            }
        >
            <div style={{ height: contentHeight }}>
                {/* 形成滚动条 */}
                <div style={{ height: top }}></div>
                {items}
            </div>
        </div>
    )
}

export default FixedSizeList