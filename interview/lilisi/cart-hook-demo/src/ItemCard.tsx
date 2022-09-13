import React from 'react'
import { Typography } from 'antd'
import { CartItem } from './App'
interface Props {
    item: CartItem;
    checked: boolean;
    onCheckedChange: () => void
}
// 性能优化： React.memo  第二个参数areEuqal 依赖条件
// React.memo 第二个参数areEuqal为函数，且其返回值为true才会更新
// areEuqal 需要比较前后数据是否变化来判断是否需要更新 所以参数需要两个
function areEuqal(prevProps: Props, nextProps: Props) {
    return (
        prevProps.checked === nextProps.checked
    )
}
const ItemCard: React.FC<Props> = React.memo((props: Props) => {
    console.log('cart item renderer');

    const { item, checked, onCheckedChange } = props
    const { name, price } = item
    return (
        <div className='item-card'>
            <div className="checkbox-wrap">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onCheckedChange}
                />
            </div>
            <p className="item-info">
                {name} <Typography.Text>${price}</Typography.Text>
            </p>
        </div>
    )
}, areEuqal)

export default ItemCard