import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <div className='header-content'>
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the
            finest ingredients and culinary expertise. our mission is to satisfy your cravings
            and elevate your dining experience, one delicious meal at a time. 
        </p>
        <button>View More</button>
       </div>
    </div>
  )
}

export default Header