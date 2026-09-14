import React from 'react'
import { ChevronDown } from 'lucide-react';
import { Globe } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const UserMenu = () => {
  return (
    <div className='flex items-center gap-2'>
      <button className='flex  p-1 rounded-lg shadow-md' ><Globe/>EN<ChevronDown/></button>
      <a><CircleUserRound/></a>

    </div>
  )
}

export default UserMenu