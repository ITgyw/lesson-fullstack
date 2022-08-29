import { useState } from 'react'
import './App.css'
// import Demo from './components/Demo'
import { NewDemo, MyContextProvide } from './components/NewDemo'

function App() {


  return (
    <div className="App">
      {/* <Demo /> */}
      <MyContextProvide>
        <NewDemo />
      </MyContextProvide>
    </div>
  )
}

export default App
