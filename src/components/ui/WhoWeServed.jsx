import React from 'react';
import Header from './Header';
import Carousel from './Carousel';

const WhoWeServed = () => {
  return (
    <article className='mt-20 px-4'>
      <Header name={"Who We've Served"} />
      <figure className='w-full mask-grad mt-8'>
        <Carousel
          direction='forward'
          images={[
            '/images/brands/Aludecor.png',
            '/images/brands/development-bank-of-singapore.png',
            '/images/brands/dhl.png',
            '/images/brands/finolex.png',
            '/images/brands/Fresenius_Kabi_Logo.png',
          ]}
        />
      </figure>
      <figure className='w-full mask-grad mt-4'>
        <Carousel
          direction='reverse'
          images={[
            '/images/brands/hdfc-bank-logo.png',
            '/images/brands/Ingenico-Logo.wine.png',
            '/images/brands/Max_India_Logo.svg.png',
            '/images/brands/prismlogo.png',
            '/images/brands/spark.png',
          ]}
        />
      </figure>
    </article>
  );
};

export default WhoWeServed;
