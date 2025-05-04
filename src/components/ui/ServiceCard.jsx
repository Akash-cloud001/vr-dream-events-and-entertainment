import React from 'react';
import { Link } from 'react-router-dom';
import ChevronIcon from '../svgs/ChevronIcon';

const ServiceCard = ({ service }) => {
  return (
    <Link to={service.link} className='service-card col-span-12 md:col-span-6 lg:col-span-4 rounded-3xl overflow-hidden relative h-[400px] w-auto border'>
      <img
        className='absolute block h-full w-full object-cover object-top'
        src={service?.imgUrl}
        alt={service?.name}
      />
      <div className='bg-black/40 text-white ff-allen text-2xl capitalize backdrop-blur-sm rounded-3xl h-20 px-4 sm:px-6 flex items-center justify-between relative z-[1] top-[calc(100%-80px)]'>
        <p>{service.name}</p>
        <ChevronIcon />
      </div>
    </Link>
  );
};

export default ServiceCard;
