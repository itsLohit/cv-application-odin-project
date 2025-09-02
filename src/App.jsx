import { useState } from 'react'
import './App.css'
import Header from './components/views/header'
import { AppMainContent } from './components/appMainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AppMainContent/>
    </>
  )
}

export default App
