import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 mb:py-28">
        <img src='./images/hero-bgimage.png' className='absolute -top-36 -left-6 md:max-h-[800px]' />
        <div className='font-poppins grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-end gap-x-8 md:gap-x-4 gap-y-16'>
            <div className="space-y-8">
                <h1 className='font-fjalla_one text-white text-5xl sm:text-6xl md:text-7xl text-center md:text-left lg:text-8xl leading-snug'>Join the<br />
                    Solar Energy<br />
                    <span className='text-[#9FE221]'>Revolution</span>
                </h1>
                <p className='text-base px-4 sm:px-6 md:px-0 text-[#D9F4FD] mx-auto max-w-prose md:mx-0 md:max-w-none text-center md:text-left'>If you are tired of huge bill prices, constant power outrage, & blackouts, and you want permanent solution of these problems. We got you covered because we will solve your problem by harnessing the power of sun to provide you free electricity.</p>
                <div className='flex gap-2 place-content-center md:justify-start'>
                    <Button styles={'text-white'} button_text={'Buy Now!'} />
                    <Button styles={'[background:none] border-2 [border:linear-gradient(90deg,_#31640b,_rgba(159,_226,_33,_0.6))] text-[#9FE221]'} button_text={'Calculator'} />
                </div>
            </div>
            <div className='relative'>
                <img src="./images/hero_image.png" className='w-auto md:w-80 lg:w-auto h-96 md:h-auto' alt="" />
                <img src="./images/hero-bgeffectimage2.png" className='absolute h-auto right-4 -top-32 md:-top-44' alt="" />
                <img src="./images/hero-bgeffectimage1.png" className='absolute h-auto right-4 -bottom-24' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero