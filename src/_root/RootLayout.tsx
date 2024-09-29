// src/_root/RootLayout.tsx
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

interface RootLayoutProps {
  children?: React.ReactNode
}

const RootLayout = ({ children } : RootLayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main>
        {children}
        <Outlet /> {/* This will render nested routes */}
      </main>
    </div>
  )
}

export default RootLayout
