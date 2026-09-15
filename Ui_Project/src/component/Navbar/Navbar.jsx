import Logo from './Logo'
import Navlink from './Navlink'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-3  rounded-lg shadow-md'>
      <Logo/>
      <Navlink/>
      <UserMenu/>
    </nav>
  )
}

export default Navbar