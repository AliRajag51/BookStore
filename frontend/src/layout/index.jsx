import React from 'react'
import Navbar1 from './Navbar_temp'
import Footer1 from './Footer_temp'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar1 />
      {children}
      <Footer1 />
    </>
  )
}

export default Layout
