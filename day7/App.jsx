import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)

  const todo = (<>
    <div className="todo"></div>
  </>)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h>Vite + React</h>
      {/* {showbtn?<button>i will be shown when only when another butten is clicked </button> : null} */}
      {showbtn && <button>i will be shown when only when another butten is clicked </button>}
      <div className="card">
        <button onClick={() => setShowbtn(!showbtn)}>
          {showbtn ? 'Hide' : 'Show'} Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
