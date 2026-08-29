import React from 'react'
import { BriefcaseBusiness } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const Header = () => {
  return (
    <div className='top'>
        <h1><BriefcaseBusiness size={30} />JobTrack</h1>
        <h2><span><CircleUserRound /></span>Niraj Patil<ChevronDown /></h2>
    </div>
  )
}

export default Header