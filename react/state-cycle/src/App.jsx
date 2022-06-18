import React, { useState, useEffect } from 'react'
// import { useState, createElement } from 'react' //将createElement结构 因为他是属于React的方法

//  JSX其实是个对象 React.createElemnet('div',{className:'hello'},
//                         React.createElemnet('h1',null,'Hello World!'))
const Hello = () => <div className='hello'>Hello World!</div> //为什么Hello要变成函数才能return？
// console.log(Object.prototype.toString.call(Hello));

// 1. JSx 是优秀且简单的UI表达创新
// 2. JSX 会通过babel -> 转义 React.createElemnet()
// 状态时自有的， useState是响应式的， 但是一般建议放在父组件
// 便于多个子组件共享数据
// 子组件里 props参数对象的
// 子组件里不要去添加自有的状态 外界不同步 除非外界用不到

const Header = () => {
  return (
    <div>
      <Title title='首页' />
    </div>
  )
}

// props: 父组件传给子组件的所有参数集合 不是子组件自己的
const Title = (props) => {
  const { title } = props
  return (
    <header>
      {title}
    </header>
  )
}

const Main = ({ users }) => {
  // {users}也是props是从index传进来的 不是mian自己的
  return (
    <div>
      Main
      <ul>
        {/* 循环列表最好给每个添加不同的key属性 */}
        {users.map(user => <li key={user.id}>{user.id}:{user.name} - {user.age}</li>)}
      </ul>
    </div>
  )
}

const Footer = ({ count }) => {
  return (
    <footer>
      Footer,有{count}位用户
    </footer>
  )
}

const Index = () => {
  // 不是用useState  需要数据绑定，且响应
  // 目前users好不够格成为状态 const users = [{},{}]
  // 当users变成状态时 就成为响应式的
  // state是自有的，一般在父组件声明
  // 
  const [users, setUsers] = useState([{
    name: 'A',
    age: 19,
    id: 1
  }, {
    name: 'B',
    age: 18,
    id: 2
  }, {
    name: 'A',
    age: 18,
    id: 3
  }]);
  // 生命周期函数  onload是整个页面资源全部加载好了触发的事件  onDOMContontLoaded是HTML和CSS加载完成后触发的事件
  // Component 组件里 useEffect可以代替onDOMContontLoaded表示组件挂载了
  useEffect(() => {
    console.log('组件加载好了');
    setTimeout(() => {
      setUsers([
        ...users, {
          name: 'C',
          age: 20,
          id: 4
        }
      ])
    }, 2000)
  }, [])

  // setTimeout(() => {
  //   setUsers([
  //     ...users, {
  //       name: 'C',
  //       age: 18,
  //       id: 4
  //     }])
  // }, 1000)


  return (
    // 如果唯一的父元素，只起到包裹作用，而不需要标签 就省略它
    <>
      <Header />
      <Main users={users} />
      <Footer count={users.length} />
    </>
  )
}

function App() {
  return (
    <Index />
  )
  // return React.createElement('div', null, 'hello world')
}

export default App
