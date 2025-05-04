import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

function App() {

  return (
    <main className='relative w-full h-auto'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service/:service_name" element={<Service />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
    </main>
  )
}

export default App
