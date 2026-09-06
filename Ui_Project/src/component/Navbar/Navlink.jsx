import React from 'react'

const Navlink = () => {
  const navlink = ["Home" , "Hotels", "Offers", "My Booking","About Us"];
  return (
    <ul className='flex gap-8 text-blue-700 '>
      {navlink.map((link) =>(
        <li key={link}>
          <a href='#'>{link}</a>
        </li>
      ))}
    </ul>
    
  )
}

export default Navlink