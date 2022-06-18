// 将useState从react结构  称为React  Hooks
import React, { useState } from 'react';

//从一个函数返回一段JSX
const App = () => {
  // state状态
  // 用useState为组件添加一个状态其参数是默认值new Date().toLocaleTimeString()
  // 用结构的方法赋值给date


  // let [isSingle, setIsSingle] = useState(true);
  let [name, setName] = useState('hgb');
  let [date, setDate] = useState(new Date().toLocaleTimeString());
  // let name = 'hgb';
  setInterval(() => {
    setDate(new Date().toLocaleTimeString())
  }, 1000)
  const changeName = () => {
    console.log('Jack')
    // this.name = 'Jack'
    setName('HU')
  }
  const friends = [{
    name: '崔浩',
    age: 18
  }, {
    name: '兰文浩',
    age: 20
  }

  ];
  return (
    <div>

      {/* <p>{isSingle ? <span>单身</span> : <span>有主</span>}</p> */}
      <h1>hello {name}</h1>
      <h2>现在是 {date}</h2>
      {/* <ul>
        {
          friends.map(friend => <li key={index}>{friends.name}-{friends.age}</li>)
        }
      </ul> */}
      <button onClick={changeName}>显示英文名</button>
    </div>
  )
}

export default App 