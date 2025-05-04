import React, { useState, useRef, useLayoutEffect } from 'react'
import VrLogo from './svgs/VrLogo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  useLayoutEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY) >= window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Check scroll position on mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`h-24 w-full fixed top-0 left-0 z-[1000] flex items-center justify-between px-4 ff-allen overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none '}`}
      >
        <div className="absolute w-full h-full top-0 left-0 z-0 backdrop-blur-sm"></div>
        <VrLogo className="h-11 w-auto relative z-[1]" />
        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-10 items-center justify-center relative z-[1]">
          <li className="text-black/80">Home</li>
          {/* <li className="text-black/80">About us</li> */}
          <li className="text-black/80">
            <Link to={'/services'}>Services</Link>
          </li>
          <li>
            <button className="px-5 py-3 bg-primary text-white rounded-lg">
              Contact Us
            </button>
          </li>
        </ul>
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden relative z-[2] flex flex-col justify-center items-center w-8 h-8 gap-1"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-black opacity-80 rounded transition-transform duration-300 ${
              isSidebarOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black opacity-80 rounded transition-opacity duration-300 ${
              isSidebarOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black opacity-80 rounded transition-transform duration-300 ${
              isSidebarOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </nav>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[1400] transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden`}
        onClick={toggleSidebar}
      />
      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-[1500] transform transition-transform duration-300 ease-in-out  shadow-lg ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-6 gap-6 text-primary">
          <button
            className="self-end text-primary text-3xl font-light border border-primary/30 rounded-full p-2 h-10 w-10 grid place-content-center"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer pb-4 border-b border-black/20" onClick={toggleSidebar}>Home</li>
            <li className="cursor-pointer pb-4 border-b border-black/20" onClick={toggleSidebar}>About us</li>
            <li className="cursor-pointer pb-4 " onClick={toggleSidebar}>Services</li>
            <li>
              <button
                className="px-5 py-3 bg-primary text-white rounded-lg w-full"
                onClick={toggleSidebar}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
