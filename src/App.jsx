import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Service from './pages/Service';
import Navbar from './components/Navbar';

function App() {

  return (
    <main className='relative w-full h-auto'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Services />} />
      <Route path="/services/:service_name" element={<Service />} />
    </Routes>
    </main>
  )
}

export default App
