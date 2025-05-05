import React, { useRef } from 'react'
import { services } from '../services'
import ServiceCard from '../components/ui/ServiceCard'
const Services = () => {
  const servicesRef = useRef()
    const handleScroll = ()=>{
      if(servicesRef.current){
        window.scrollTo({
          top: servicesRef.current.offsetTop,
          behavior: 'smooth' // optional, for smooth scrolling
        });
      }
    }
  return (
    <section className='home-page'>
      <section className="h-dvh w-full bg-black ff-allen grid place-content-center relative overflow-hidden relative">
        <div className="difference-text text-2xl xs:text-[32px] sm:text-4xl  md:text-6xl xl:text-7xl flex flex-col items-center justify-center gap-4 md:gap-8 relative z-[1]">
          <p>OUR</p>
          <p>SERVICES</p>
        </div>
        <img src="/images/services/artist-management.png" alt="our services" className='h-full w-full absolute object-cover' />
        <div onClick={handleScroll} className='cursor-pointer select-none h-14 w-14 rounded-full bg-black absolute bottom-6 right-6 text-xs flex flex-col items-center justify-center text-white'>
              <p className='mt-1'>
                  Scroll
              </p>
              <p>
                  Down
              </p>
        </div>
      </section>

      <section ref={servicesRef} className='max-w-1180 mx-auto w-full grid grid-cols-12 gap-8 pt-[140px] px-4'>
        {services.map((service, idx)=>(
               <ServiceCard service={service} key={idx} />
        ))}
      </section>
    </section>
  )
}

export default Services