import React from 'react'
import { Color } from '../model/color'

interface Props {
    // 给颜色一个初始值
    color: Color;
    onColorUpdated: (color: Color) => void;
}

// colorId:keyof Color  colorId的取值是Color的接口内的三个属性red/green/blue
// value: any 放弃对value的限制
const updateColor =
    (props: Props, colorId: keyof Color) =>
        (value: any) => {
            props.onColorUpdated({
                ...props.color,
                [colorId]: value
            })
        }

const ColorPicker: React.FC<Props> = (props) => {
    return (
        <div>
            <ColorSliderComponent
                value={props.color.red}
                onValueUpdated={updateColor(props, "red")}
            />
            <ColorSliderComponent
                value={props.color.green}
                onValueUpdated={updateColor(props, "green")}
            />
            <ColorSliderComponent
                value={props.color.blue}
                onValueUpdated={updateColor(props, "blue")}
            />
        </div>
    )
}

interface PropsColorSlider {
    value: number;
    onValueUpdated: (newValue: number) => void;
}
const ColorSliderComponent: React.FC<PropsColorSlider> = (props) => {
    return (
        <div>
            <input
                type="range"
                min="0"
                max="255"
                value={props.value}
                // + 强制类型转换
                onChange={(event) => props.onValueUpdated(+event.target.value)}
            />
            {props.value}
        </div>
    )
}

export default ColorPicker 