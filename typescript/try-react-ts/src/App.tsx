import { useState } from 'react'
import './App.css'
import HelloComponent from './hello'

function App() {


  return (
    <div className="App">
      <HelloComponent userName='hgb' age={18} />
    </div>
  )
}

export default App
