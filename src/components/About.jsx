import React from 'react'

function About() {
  return (
    <div id='about' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className='font-poppins space-y-16 pb-16 md:pb-28'>
          <h2 className='font-fjalla_one tracking-wide text-5xl leading-snug sm:text-[64px] text-[#9FE221] text-center lg:text-left'>About</h2>
          <div className="grid grid-cols-1 justify-items-center items-center lg:items-start lg:grid-cols-2 gap-10 lg:gap-16">
              <p className='text-base text-[#D9F4FD] text-center leading-loose lg:text-justify mx-auto lg:mx-0 max-w-prose'>SZSOLAR is a company that offers the opportunity to create a clean future for future generations through solar energy solutions.
  <span className='mt-4 block'>We committed to both residential, industrial, and commercial solar products over more than a decade, its performance advantages in real-world conditions and environmental benefits today we considered as a pioneer in the solar industry.  Our extensive product range, seamless installations, and diverse Project Portfolio have earned us market leader status in no time.</span>
  <span className='mt-4 block'>Our vision is to make our environment optimistic and green with very advanced, revolutionary and sustainable solar products to make Pakistan brighter.</span></p>
            <div className='relative'>
              <img src="./images/about_image.png" alt="" className='h-auto w-96' />
              <img src="./images/about_bgeffectimage.png" alt="" className='absolute aspect-h-1 aspect-w-1 sm:max-w-lg top-16 sm:-top-6 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0 sm:-left-16' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default About