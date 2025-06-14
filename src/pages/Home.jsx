import React, { useRef } from 'react'
import Hero from '../components/Hero'
import ProcessDesk from '../components/svgs/ProcessDesk'
import IdeateGraphic from '../components/svgs/IdeateGraphic'
import PlanGraphic from '../components/svgs/PlanGraphic'
import ExecuteGraphic from '../components/svgs/ExecuteGraphic'
import { Link } from 'react-router-dom'
import Header from '../components/ui/Header'
import ServiceCard from '../components/ui/ServiceCard'
import WhoWeServed from '../components/WhoWeServed'
import { services } from '../services'

const Home = () => {
  const aboutRef = useRef()
  const handleScroll = ()=>{
    if(aboutRef.current){
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: 'smooth' // optional, for smooth scrolling
      });
    }
  }
  return (
    <section className='home-page'>
        <Hero handleScroll={handleScroll} />
        <section ref={aboutRef} className="h-auto w-full pt-[140px] px-4 max-w-1180 mx-auto">
          <Header name={'What we DO. We DO it best'} />
          <article className='flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-12 xl:gap-16 pt-11'>
            <figure className='relative h-[350px] w-[300px] xs:w-[320px] '>
              <img src="/about.jpeg" alt="about us" className='h-full w-full rounded-2xl relative z-[1]'/>
              <div className='hidden xs:block absolute rounded-tl-[30px] rounded-br-lg h-24 w-24 bg-secondary -bottom-8 -left-8 z-0'></div>
            </figure>

            <div className='ff-pop text-sm sm:text-base font-light text-black opacity-80 w-full md:w-[400px] lg:w-[500px]'>
              <p>
              At our core, we craft unforgettable experiences that leave a lasting impact. As a premier event management company, we bring together innovative ideas, strategic planning, and attention to detail to execute flawless events — from corporate gatherings and exhibitions to brand activations and roadshows.
              </p>
              <p className='mt-3'>
              Our expert team goes beyond event execution by offering end-to-end solutions, including Customized Boards, Stands, and Other Branding Items, designed to elevate your brand presence and engage your audience.</p>
              <p className='mt-3'>
              With a proven history of successful events and satisfied clients, we don’t just organize events — we create emotional connections, foster brand loyalty, and deliver measurable results.
              </p>
            </div>
          </article>


          <article className='mt-20 '>
            <p className='text-2xl text-center ff-pop font-semibold text-black/90'>
                Our Process
            </p>
            <figure className='mt-6 xl:mt-9'>
               <ProcessDesk className='hidden md:block h-[320px] w-full' />
               <aside className='flex flex-col md:flex-row items-center justify-center gap-8 md:mt-4 lg:mt-8'>
                <div className='flex flex-col text-center w-[320px] md:w-[282px]'>
                  <IdeateGraphic className='block h-[280px] w-auto md:hidden' /> 
                  <p className='ff-allen text-black/90 text-2xl mt-6 md:mt-0'>Ideate</p>
                  <p className='mt-2 md:mt-4 text-base text-black/70 font-light'>We dive deep into your vision, brainstorm bold ideas, and craft creative concepts that align perfectly with your brand and goals.</p>
                </div>
                <div className='flex flex-col text-center w-[320px] md:w-[282px]'>
                  <PlanGraphic className='block h-[280px] w-auto md:hidden'/>
                  <p className='ff-allen text-black/90 text-2xl mt-6 md:mt-0'>Plan</p>
                  <p className='mt-2 md:mt-4 text-base text-black/70 font-light'>Our expert team handles every detail — timelines, budgets, and logistics — ensuring a stress-free and strategic approach to execution.</p>
                </div>
                <div className='flex flex-col text-center w-[320px] md:w-[282px]'>
                  <ExecuteGraphic className='block h-[280px] w-auto md:hidden'/>
                  <p className='ff-allen text-black/90 text-2xl mt-6 md:mt-0'>Execute</p>
                  <p className='mt-2 md:mt-4 text-base text-black/70 font-light'>From setup to showtime, we deliver flawless, on-ground experiences that leave lasting impressions and exceed expectations every single time.</p>
                </div>
               </aside>
            </figure>
          </article>

          <article className="mt-20 mask-grad ">
            <header className='text-xl  md:text-[40px] ff-allen text-black/80 text-center py-2'>
              Bringing World-Class Events to Every Corner of <br />
              <span className='text-4xl md:text-6xl text-ternary mt-4 sm:mt-4 inline-block'> India</span>
            </header>
            <img src="/india.svg" className='h-full w-full mt-8 ' alt="" />
          </article>


          <article className="mt-32">
            <Header name={'Our Services'} />

            <section className="w-full grid grid-cols-12 gap-8 mt-8">
              {services.map((service, idx)=>{
                if(idx>=6) return
               return <ServiceCard service={service} key={idx} />
              })}
            </section>
              <Link to={'/services'} className='block border border-primary rounded-lg text-primary ff-allen text-lg w-max px-5 py-3 mt-8 mx-auto'>
                More Services
              </Link>

          </article>
          <WhoWeServed/>
        </section>
    </section>
  )
}

export default Home