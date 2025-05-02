import React, { useLayoutEffect, useRef, useState } from 'react'
import VrLogo from './svgs/VrLogo'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY + 200) >= window.innerHeight) {
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

  return (
    <nav
      ref={navRef}
      className={`h-24 w-full fixed top-0 left-0 z-[1000] flex items-center justify-between px-4 ff-allen overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none '
      }`}
    >
      <div className="absolute w-full h-full top-0 left-0 z-0 backdrop-blur-sm"></div>
      <VrLogo className="h-11 w-auto relative z-[1]" />
      <ul className="flex gap-10 items-center justify-center relative z-[1]">
        <li className="text-black opacity-90">
          <Link to={'/'} className='h-full w-full inline-block'>
            Home
          </Link>
        </li>
        {/* <li className="text-black">
          <Link to={'/'} className='h-full w-full inline-block'>
            About us
          </Link>
        </li> */}
        <li className="text-black opacity-90">
          <Link to={'/services'} className='h-full w-full inline-block'>
            Services
          </Link> 
        </li>
        <li>
          <Link to={'/contact-us'} className="inline-block px-5 py-3 bg-primary text-white rounded-lg">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
