import React from 'react'

const Navbar = ({ adjective }) => {
    console.log("Navbar rendered") 
  return (
    <div>
      i am a {adjective} Navbar
    </div>
  )
}

export default Navbar
