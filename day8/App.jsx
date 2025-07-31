import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Parvath Reddy')

  const handleClick = () => {
    alert('Button clicked!')

  }

  const handlemouseOver = () => {
    alert('Mouse over the red div!')
  }

  return (
    <>
    <div className="button">
      <button onClick={handleClick}>Click me</button>
    </div>
    <div className="red" onMouseOver={handlemouseOver}>
      im a red div
    </div>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </>
  )
}

export default App
