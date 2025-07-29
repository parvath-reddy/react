import React from 'react'
import './card.css' // Ensure the CSS file is correctly named and imported

const Card = () => {
  return (
    <div className='card'>
        <h2>Card Title</h2>
        <p>This is a simple card component.</p>
        <button className='btn'>Click Me</button>
    </div>
  )
}

export default Card