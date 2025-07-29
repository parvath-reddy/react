import React,{useEffect} from 'react'

const navbar = ({colour}) => {
    useEffect
(() => {
        alert("colour was changed to " + colour)
    }, [colour])
  return (
    <div>
      i am nav bar {colour} hehe 
    </div>
  )
}

export default navbar
