import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../services';
import WhoWeServed from '../components/WhoWeServed';
const Service = () => {
  const {service_name, id} = useParams();
  const [service, setService] = useState({});
  const [isError, setError] = useState(false)
  useEffect(()=>{
    if(service_name){
      const key = 'id'
      const res = services.find(service => service[key] === id);
      if(res){
        setService(res)
      }else{
        setError(true)
      }
      console.log(res)
    }
  },[])

  const serviceRef = useRef()
      const handleScroll = ()=>{
        if(serviceRef.current){
          window.scrollTo({
            top: serviceRef.current.offsetTop,
            behavior: 'smooth' // optional, for smooth scrolling
          });
        }
      }
  return (
    <section className='home-page'>
      <section className="h-dvh w-full bg-black ff-allen grid place-content-center overflow-hidden relative">
        <img src={service?.imgUrl} alt={service?.name} className='h-full w-full absolute object-cover' />ß
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-2xl xs:text-[32px] sm:text-4xl  md:text-6xl xl:text-7xl flex flex-col items-center justify-center gap-4 md:gap-8 z-[1]  backdrop-blur-md px-9 pt-8 pb-6 rounded-t-3xl">
          <p className='whitespace-nowrap'>
            {service?.name}
          </p>
        </div>
        <div onClick={handleScroll} className='hidden sm:flex cursor-pointer select-none h-14 w-14 rounded-full bg-black absolute bottom-6 right-6 text-xs  flex-col items-center justify-center text-white '>
              <p className='mt-1'>
                  Scroll
              </p>
              <p>
                  Down
              </p>
        </div>
      </section>
      <section ref={serviceRef} className='max-w-1180 mx-auto w-full gap-8 pt-20 px-4 text-xl font-light  text-center text-black/80'>
      {service?.content}

      <a href={`https://wa.me/9899125551?text=${encodeURIComponent(`I'm interested in your service: ${service.name}`)}`} className='block border border-primary rounded-lg text-primary ff-allen text-lg w-max px-5 py-3 mt-8 mx-auto'>
                Let's Connect
              </a>

      </section>
      <WhoWeServed/>

    </section>
  )
}

export default Service