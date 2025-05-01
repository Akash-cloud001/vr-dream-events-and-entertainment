import React from 'react'

const Hero = () => {
  return (
    <section className="hero-container h-screen w-full bg-black ff-allen grid place-content-center relative">
      <div className="difference-text text-2xl xs:text-3xl sm:text-4xl  md:text-6xl xl:text-7xl flex flex-col items-center justify-center gap-4 md:gap-8 relative z-[1]">
        <p>EXPERT PLANNING</p>
        <p>SEAMLESS EXECUTION</p>
      </div>
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

      <div className='h-14 w-14 rounded-full bg-black absolute bottom-6 right-6 text-xs flex flex-col items-center justify-center text-white'>
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