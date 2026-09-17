import React from 'react'
import { MapPin, Calendar, Users } from "lucide-react";
import SearchField from './SearchField';
const SearchBox = () => {
  return (
    <section className='flex gap-6 w-205 items-center shadow-xl p-6 rounded-2xl bg-white'>

      <SearchField
        title="Destination"
        text="Where are you going?"
        icon={MapPin}
      />

      <SearchField
        title="Check-in"
        text="Select Date"
        icon={Calendar}
      />

      <SearchField
        title="Check-out"
        text="Select Date"
        icon={Calendar}
      />

      <SearchField
        title="Guests"
        text="2 Guests"
        icon={Users}
      />
      <button className='rounded-2xl px-6 py-3 font-medium text-white bg-[#6538D8] cursor-pointer'>Search Hotels</button>

    </section>
  )
}

export default SearchBox