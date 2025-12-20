import './App.css'
import Banner from './components/banner.jsx'
import Freecourse from './components/freecourse.jsx'
import ContactUs from './components/ContactUs.jsx'
import AboutUs from './components/AboutUs.jsx'
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

