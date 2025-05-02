import React from 'react'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <section className='home-page'>
        <Hero />
        <section className="h-screen w-full pt-[140px] px-4">
          <header className='text-4xl md:text-5xl ff-allen text-center text-primary'>
           What we DO. We DO it best
          </header>
          <article className='flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-12 xl:gap-16 pt-11'>
            <figure className='relative h-[350px] w-[300px] xs:w-[320px] '>
              <img src="/about.jpeg" alt="about us" className='h-full w-full rounded-2xl relative z-[1]'/>
              <div className='hidden xs:block absolute rounded-tl-[30px] rounded-br-lg h-24 w-24 bg-secondary -bottom-8 -left-8 z-0'></div>
            </figure>

            <div className='ff-pop text-base lg:text-xl font-light text-black opacity-80 w-full md:w-[400px] lg:w-[500px]'>
              <p>
                We specialize in creating memorable and successful events that go beyond expectations. As a leading event management company, we combine creativity, precision, and passion to deliver exceptional experiences — whether it's a corporate event, brand activation, exhibition, or roadshow.
              </p>
              <p className='mt-4'>
                With a strong track record of successful projects and a team of professional event planners, we don’t just plan events — we build relationships, spark emotions, and deliver results that matter.
              </p>
            </div>

          </article>
        </section>
    </section>
  )
}

export default Home