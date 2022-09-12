// JSX UI 
// state props
import React, { Component, PropsWithChildren } from 'react'
import Child from './Child'
// Component 组件的基类
interface Props {

}
interface State {
    count: number;
    visible: boolean;
}
class Father extends Component<Props, State> {
    // 面向对象的语法约束
    constructor(props: Props) {
        super(props)
        this.state = {
            count: 1,
            visible: true
        }
    }
    toggle() {
        // console.log(this, '------');
        this.setState({
            visible: !this.state.visible
        })
        console.log(this.state.visible);
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                {this.state.count}
                Father
                <button onClick={this.increase.bind(this)}>increase</button>
                {this.state.count && <Child count={this.state.count} />}
                <button onClick={this.toggle.bind(this)}>切换</button>
            </div>
        )
    }
}

export default Father