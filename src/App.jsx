import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar.jsx"
import Intro from "./components/Intro.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  )
}

export default App
