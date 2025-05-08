import React from 'react'
import VrLogo from './svgs/VrLogo'

const Footer = () => {
   
  return (
    <footer className='px-4 sm:px-4 pb-2 mt-20 relative'>
        <section className="bg-primary w-full h-auto rounded-[20px] px-4 sm:px-8 lg:px-11 flex flex-col md:flex-row gap-8 pt-8 pb-20 relative">
            <div className='w-full '>
                <VrLogo fillRect='#92140C' fillText='#FFF8F0' className='h-12 sm:h-14' />
                <ul className='mt-11 pl-2 flex flex-col gap-4 sm:gap-5'>
                    <li className='flex gap-3 items-center justify-start'>
                        <img src="/images/socials/sms.svg" alt="sms" />
                        <a href="mailto:contact@vrdreamevents.in" target='_blank' className='text-white/90 text-sm'>contact@vrdreamevents.in</a>
                    </li>
                    <li className='flex gap-3 items-center justify-start'>
                        <img src="/images/socials/call.svg" alt="sms" />
                        <a href="tel:9899125551" target='_blank' className='text-white/90 text-sm'>+91-9899125551</a>
                        <a href="tel:9899722731" target='_blank' className='text-white/90 text-sm'>+91-9899722731</a>
                    </li>
                    <li className='flex gap-3 items-center justify-start'>
                        <img src="/images/socials/location.svg" alt="sms" />
                        <a href="https://maps.app.goo.gl/RUu49bTu4gCPSpXf6" target='_blank' className='text-white/90 text-sm'>RZ 243/4C E-17 KH No 54/17, Raj Nagar Part II , Palam Colony New Delhi - 110077</a>
                    </li>
                    <li className='flex gap-3 items-center justify-start'>
                        <img src="/images/socials/copyright.svg" alt="sms" />
                        <div className='text-white/90 text-sm'>2025 VR Dream Events and Entertainments. All Rights Reserved.</div>
                    </li>
                </ul>
            </div>
            <div style={{ position: 'relative' }} className='hidden sm:block rounded-lg overflow-hidden w-full'>
                <div style={{ position: 'relative', height: 300, overflow: 'hidden' }} >
                    <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width:'100%', height: '100%', border: 20, }} 
                    loading="lazy" 
                    allowFullScreen 
                    src="https://maps.google.com/maps?q=RZ+243%2F4C+E-17+KH+No+54%2F17%2C+Raj+Nagar+Part+II+%2C+Palam+Colony+New+Delhi+-+110077&z=15&output=embed"
                    />
                </div>
            </div>
            <ul className='absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 items-center justify-center pb-6'>
                <li>
                    <a href="https://wa.me/9899125551"  target='_blank'>
                        <img src='/images/socials/whatsapp.svg' />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/vrdreamevents" target='_blank'>
                        <img src='/images/socials/facebook.svg' />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/vr_dream_events?igsh=NDJodzdubnhiYWE3&utm_source=qr" target='_blank'>
                        <img src='/images/socials/instagram.svg' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/vr-dream-events-and-entertainments/" target='_blank'>
                        <img src='/images/socials/linkedin.svg' />
                    </a>
                </li>
            </ul>
        </section>
        <p className='text-center text-xs text-black/70 mt-2'>
            Website designed & developed by <a href="" className='ff-allen'>Akash Parmar</a>
        </p>
    </footer>
  )
}

export default Footer