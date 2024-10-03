import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import Landing from './_root/pages/landing/Landing'
import About from './_root/pages/about/About'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter
