import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import { useSelector ,useDispatch } from 'react-redux'
import { increment, decrement , multiply} from './counter/counterSlice'

function App() {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
        <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h3>currently count is {counter}</h3>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(multiply())}>*</button>
        </div>
      
    </>
  )
}

export default App
