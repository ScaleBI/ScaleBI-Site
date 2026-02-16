import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import SuccessStories from './pages/SuccessStories'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-index" element={<SuccessStories />} />
      </Routes>
      <Footer />



    </>
  )
}

export default App
