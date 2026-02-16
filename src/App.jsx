import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import SuccessStories from './pages/SuccessStories'
import ScrollToHash from "./components/ScrollToHash";


function App() {


  return (
    <>
      <Navbar />
       <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-index" element={<SuccessStories />} />
      </Routes>
      <Footer />



    </>
  )
}

export default App
