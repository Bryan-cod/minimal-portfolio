import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from "./components/Navbar.jsx"
import Intro from "./components/Intro.jsx"
import Education from "./components/Education.jsx"
import Projects from "./components/Projects.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Projects />
      <Intro />
    </div>
  )
}

export default App
