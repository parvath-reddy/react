import React from 'react'
import { useSelector , useDispatch} from 'react-redux'

const Navbar = () => {
  const counter = useSelector((state) => state.counter.value)
  return (
    <div>
      <h1>Counter: {counter}</h1>
    </div>
  )
}

export default Navbar
