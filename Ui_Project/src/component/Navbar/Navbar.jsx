import Logo from './logo'
import Navlink from './Navlink'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-3 border m-5 rounded-lg'>
      <Logo/>
      <Navlink/>
      <UserMenu/>
    </nav>
  )
}

export default Navbar