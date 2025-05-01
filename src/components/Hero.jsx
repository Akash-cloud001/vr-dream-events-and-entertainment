import React from 'react'

const Hero = () => {
  return (
    <section className="hero-container h-dvh w-full bg-black ff-allen grid place-content-center relative">
      <div className="difference-text text-3xl sm:text-4xl  md:text-6xl xl:text-7xl flex flex-col items-center justify-center gap-4 md:gap-8 relative z-[1]">
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
    </section>
  );
}

export default Hero