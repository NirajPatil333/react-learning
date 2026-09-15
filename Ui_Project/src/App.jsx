import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import SearchBox from './component/SearchBox/SearchBox'

const App = () => {
  return (
    <div className='m-5'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App