import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

interface RootLayoutProps {
  children?: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main>
        {children}
        <Outlet /> {/* This will render nested routes */}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
