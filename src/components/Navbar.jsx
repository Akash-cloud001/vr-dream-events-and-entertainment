import React from 'react'
import VrLogo from './svgs/VrLogo'

const Navbar = () => {
  return (
    <nav className='h-24 w-full border border-white absolute top-0 left-0 z-[1000] flex items-center justify-between px-4 ff-allen overflow-hidden'>
        <div className="absolute w-full h-full top-0 left-0 z-0 backdrop-blur-sm"></div>

        <VrLogo className='h-11 w-auto relative z-[1]' />
        <ul className='flex gap-10 items-center justify-center relative z-[1]'>
            <li className='difference-text'>Home</li>
            <li className='difference-text'>About us</li>
            <li className='difference-text'>Services</li>
            <li>
                <button className='px-5 py-3 bg-primary text-white rounded-lg'>
                    Contact Us
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar