import { useState } from 'react'
import { GlobalStyle } from './style'
import './assets/icon.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyle />
    </div>
  )
}

export default App
