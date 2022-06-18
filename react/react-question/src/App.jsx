import { useState } from 'react'
import Dog from './Dog'
import Computer from './Computer'
import Notifiction from './Notifiction'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  setTimeout(() => {
    setNum(2)
  }, 1000)
  return (
    <div className="App">
      {/* 自定义组件<Dog></Dog> */}
      <Dog />
      <Computer />
      <Notifiction n={num} />
    </div>
  )
}

export default App
