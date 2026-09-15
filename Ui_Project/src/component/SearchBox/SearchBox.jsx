import React from 'react'
import { MapPin, Calendar, Users } from "lucide-react";
const SearchBox = () => {
  return (
    <section className='flex gap-6 w-205 items-center shadow-xl p-6 rounded-2xl bg-white'>
      
      <div className='flex-1'>
        <h3 className='font-medium'>Destination</h3>
        <div className='flex mt-2 items-center gap-2 text-gray-400'>
          <MapPin className='h-6 w-6 text-violet-600 shrink-0' />
          <span className='whitespace-nowrap '>Where are you going?</span>
        </div>
      </div>

      <div className='flex-1'>
        <h3 className='font-medium'>Check-in</h3>
        <div className='flex mt-2 items-center gap-2 text-gray-400'>
          <Calendar className='h-6 w-6 text-violet-600 shrink-0' />
          <span >Select date</span>
        </div>
      </div>

      <div className='flex-1'>
        <h3 className='font-medium'>Check-out</h3>
        <div className='flex mt-2 items-center gap-2 text-gray-400'>
          <Calendar className='h-6 w-6 text-violet-600 shrink-0' />
          <span>Select date</span>
        </div>
      </div>

      <div className='flex-1'>
        <h3 className='font-medium'>Guests</h3>
        <div className='flex mt-2 items-center gap-2 text-gray-400'>
          <Users className='h-6 w-6 text-violet-600 shrink-0' />
          <span>2 Guests</span>
        </div>
      </div>

      <button className='rounded-2xl px-6 py-3 font-medium text-white bg-[#6538D8]'>Search Hotels</button>

    </section>
  )
}

export default SearchBox