import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className=''>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout
