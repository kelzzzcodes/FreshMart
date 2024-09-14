import { Link } from 'react-router-dom'
import './Navbar.scss'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="logo" to={'/'}>
        FreshMart
      </Link>
      <RxHamburgerMenu size={30} />
    </nav>
  )
}

export default Navbar
