import React from 'react'

const Hero = () => {
  return (
    <section className='relative h-75 rounded-2xl overflow-hidden'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDpbK1T9XW_y2HD3CG_ZT67GqI_QaKMDS1QE_tO9KFQ&s=10'
          alt='Hotel room' 
          className='h-full w-full absolute object-cover'></img>

          <div className='absolute inset-0 bg-black/50'></div>

          <div className='relative text-white p-11 z-10'>
            <h1 className='text-4xl font-bold '>Find Your Perfect Stay</h1>
            <p className='mt-3 text-lg'>Discover amazing hotels at the best prices</p>
          </div>
    </section>
  )
}

export default Hero
