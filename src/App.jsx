import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const location = useLocation();
  return (
    <main className='relative w-full h-auto'>
    <ScrollToTop />
    <Navbar />
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service/:service_name/:id" element={<Service />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    <Footer />

    </main>
  )
}

export default App
