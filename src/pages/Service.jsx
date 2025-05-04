import React from 'react'
import { useParams } from 'react-router-dom'
const Service = () => {
  const {service_name} = useParams();
  return (
    <div className='text-black'>
      {service_name}
    </div>
  )
}

export default Service