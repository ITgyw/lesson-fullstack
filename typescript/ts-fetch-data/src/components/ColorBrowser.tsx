import React from "react";
import { Color } from '../model/color'

interface Props {
    color: Color;
}
const ColorBrowser: React.FC<Props> = (props) => {
    // 在@types/react定义的React.CSSProperties 约定为 CSS 属性的集合
    const divStyle: React.CSSProperties = {
        width: "11rem",
        height: "7rem",
        backgroundColor: `rgb(${props.color.red},${props.color.green},${props.color.blue})`
    }
    return (
        <div style={divStyle} />
    )
}

export default ColorBrowser