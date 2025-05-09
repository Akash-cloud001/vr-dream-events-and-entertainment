import React from 'react'

const Hero = ({handleScroll}) => {
  return (
    <section className="hero-container h-dvh w-full bg-black ff-allen  relative overflow-hidden">
      <div className="absolute bottom-24 lg:bottom-8 w-max left-1/2 -translate-x-1/2 difference-text text-2xl xs:text-[32px] sm:text-4xl  md:text-6xl flex flex-col items-center justify-center gap-4 md:gap-8 z-[2]">
        <p>EXPERT PLANNING</p>
        <p>SEAMLESS EXECUTION</p>
      </div>
      <div className='absolute h-dvh w-full bg-black/50 z-[1]'></div>
      <video
        className="absolute video z-0"
        loop
        muted
        playsInline
        autoPlay
        poster="/hero.png"
      >
        <source src="/hero_vid.mp4" type="video/mp4" />
        Your browser doesn't support this video format.
      </video>

      <div onClick={handleScroll} className='cursor-pointer select-none h-14 w-14 rounded-full bg-black absolute bottom-6 right-6 text-xs flex flex-col items-center justify-center text-white z-[10]'>
            <p className='mt-1'>
                Scroll
            </p>
            <p>
                Down
            </p>
      </div>
    </section>
  );
}

export default Hero