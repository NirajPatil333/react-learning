import Logo from './logo'
import Navlink from './Navlink'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className='flex bg-green-50'>
        <Logo/>
        <Navlink/>
        <UserMenu/>
    </div>
  )
}

export default Navbar