import React from 'react'
import Layout from '../../layout/index.jsx'
import Banner from './banner.jsx'
import Freecourse from './freecourse.jsx'
import ContactUs from './ContactUs.jsx'
import AboutUs from './AboutUs.jsx'


function HomePage() {
  return (
    <div>
      <Layout>
      <Banner />
      <Freecourse />
      <AboutUs />
      <ContactUs />
    </Layout>
    </div>
  )
}

export default HomePage
