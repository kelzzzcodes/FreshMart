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
      <div className={styles.rootlayout__navbar}>
        <Navbar />
      </div>
      <main className={styles.rootlayout__body}>
        {children}
        <Outlet /> {/* This will render nested routes */}
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
