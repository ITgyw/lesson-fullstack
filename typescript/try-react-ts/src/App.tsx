import React, { useState } from 'react'
import { Color } from './model/color'
import ColorBrowser from './ColorBrowser'

// 根组件没有特别需求的话 不加React.FC
const App = () => {
    // <Color> 通过接口给useState类型一个约束
    // ts 为大型项目而来，容不了一点bug， model
    // ts 用来做大型项目，每一步严格， 通过类型约束或接口
    const [color, setColor] = useState<Color>({
        red: 180,
        green: 0,
        blue: 20
    })
    return (
        <>
            <ColorBrowser color={color}></ColorBrowser>
        </>
    )
}

export default App 