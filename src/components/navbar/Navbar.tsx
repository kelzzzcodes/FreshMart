import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} to={'/'}>
        FreshMart
      </Link>
      <RxHamburgerMenu size={30} data-testid="hamburger-icon" />
    </nav>
  )
}

export default Navbar
