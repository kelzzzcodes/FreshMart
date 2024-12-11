import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { About, Landing, SignUp } from './_root/pages'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
