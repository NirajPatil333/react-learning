import React from 'react'
import { House } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Users } from 'lucide-react';
const Sidebar = () => {
  return (
    <div className='bars'>
        <p><House /> Dashboard</p>
        <p><FileText/> Applications</p>
        <p><Building2 /> Companies</p>
        <p><BookOpenText /> Applications</p>
        <p><Users /> Companies</p>
    </div>
  )
}

export default Sidebar