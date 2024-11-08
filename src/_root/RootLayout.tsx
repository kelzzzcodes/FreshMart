import React from 'react'
import styles from './RootLayout.module.scss'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

interface RootLayoutProps {
  children?: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={styles.rootlayout}>
      <Navbar />
      <main className={styles.rootlayout__body}>
        {children}
        <Outlet /> {/* This will render nested routes */}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
