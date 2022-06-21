import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      <Header />
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App