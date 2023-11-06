import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './componants/navbar'
import Journal from './componants/journal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Journal/>
    </>
  )
}

export default App
