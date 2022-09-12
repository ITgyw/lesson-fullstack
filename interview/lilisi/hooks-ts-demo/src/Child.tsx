// 无状态组件 StatelessComponent
// 慢慢就发展成为函数式组件 React.FC

// import React from 'react'
// interface ChildProps {
//     count: number;
// }
// const Child: React.StatelessComponent<ChildProps> = (props) => {
//     return (
//         <div>
//             {props.count}
//         </div>
//     )
// }
// export default Child 
import React, { Component } from 'react'

interface Props {
    count: number;
}
interface State {

}
class Child extends Component<Props, State> {
    constructor(props: Props) {
        super(props) // 运行基类的constructor 才能成为组件
    }
    componentDidMount() {
        // 生命周期函数
        console.log('组件挂载了');
    }
    componentWillUnmount() {
        console.log('组件卸载了');
    }
    // 阻止组件更新
    shouldComponentUpdate() {
        console.log('check是否更新');
        if (this.props.count % 2 == 0) {
            return false
        }
        return true
    }
    componentDidUpdate() {
        console.log('组件更新了');
    }
    render() {
        const { count } = this.props
        return (
            <div>
                Child {count}
            </div>
        )
    }
}
export default Child