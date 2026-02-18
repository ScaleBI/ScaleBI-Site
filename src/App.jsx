import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import SuccessStories from './pages/SuccessStories'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contact'
import CaseStudyDetail from './pages/CaseStudyDetail'


function App() {


  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-index" element={<SuccessStories />} />
        <Route path="/case-study-index/:slug" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />



    </>
  )
}

export default App
