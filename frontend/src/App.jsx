import './App.css'
import Banner from './pages/banner.jsx'
import Freecourse from './pages/freecourse.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Layout from './layout/index.jsx'

function App() {
  return (
    <Layout>
      <Banner />
      <Freecourse />
      <AboutUs />
      <ContactUs />
    </Layout>
  )
}

export default App

