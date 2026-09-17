import React from 'react'

const Navlink = () => {
  const navlink = ["Home" , "Hotels", "Offers", "My Booking","About Us"];
  return (
    <ul className='flex gap-8 text-black '>
      {navlink.map((link) =>(
        <li key={link}>
          <a href='#'  className=' hover:text-[#6538D8] hover:underline'>{link}</a>
        </li>
      ))}
    </ul>
    
  )
}

export default Navlink