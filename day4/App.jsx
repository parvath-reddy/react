 import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setcolor] = useState(0)

//case 1 run on every render
useEffect(() => {
   alert("hay i will run on every render")
  },)

//case 2 run on first render
  useEffect(() => {
   alert("hay welcome to my page , this is run on first render only")
  }, [])
//case 3 run on every render when count changes
useEffect(() => {
   alert("hay im running cause count was changed")
  }, [color ])

  useEffect(() => {
   alert("count was updated to " + count)
   setcolor(color + 1)
  }, [count])


  return (
    <>
      <Navbar colour="red" />  
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
