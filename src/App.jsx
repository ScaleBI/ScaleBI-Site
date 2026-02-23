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
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-index" element={<SuccessStories />} />

        {/* ✅ Fixed routes */}
        <Route
          path="/case-study/hr-tech-analytics"
          element={<CaseStudyDetail slug="hr-tech-analytics" />}
        />

        <Route
          path="/case-study/global-manufacturing"
          element={<CaseStudyDetail slug="global-manufacturing" />}
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App