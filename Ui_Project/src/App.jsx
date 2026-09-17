import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import PopularHotel from './component/PopularHotels/PopularHotel'

const App = () => {
  return (
    <div className='m-5'>
      <Navbar/>
      <Hero/>
      <PopularHotel/>
    </div>
  )
}

export default App