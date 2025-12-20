import React from 'react'
import Navbar1 from './Navbar.jsx'
import Footer1 from './Footer.jsx'

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
