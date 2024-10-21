import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useCallback } from "react";
import Navbar from "./components/Navbar.jsx"
import Intro from "./components/Intro.jsx"
import Education from "./components/Education.jsx"
import Experience from "./components/Experience.jsx"
import Projects from './components/Projects';
import TsBackground from './components/TsParticlesBackground.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div style={{zIndex:2}} class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Navbar />
      </div>


      <div>
        <TsBackground />
      </div>

      <div>
        <Intro />
      </div>

      <div>
        <Education />
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  )
}

export default App
