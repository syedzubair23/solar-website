import React from 'react'

function About() {
  return (
    <div className='font-poppins space-y-16 pb-16 md:pb-28'>
        <h2 className='font-fjalla_one tracking-wide text-5xl leading-snug sm:text-[64px] text-[#9FE221] text-center lg:text-left'>About</h2>
        <div className="grid grid-cols-1 justify-items-center items-center lg:items-start lg:grid-cols-2 gap-10 lg:gap-16">
            <p className='text-base text-[#D9F4FD] text-center lg:text-left mx-auto lg:mx-0 max-w-prose'>SZSOLAR is a company that offers the opportunity to create a clean future for future generations through solar energy solutions.<br />
We committed to both residential, industrial, and commercial solar products over more than a decade, its performance advantages in real-world conditions and environmental benefits today we considered as a pioneer in the solar industry.  Our extensive product range, seamless installations, and diverse Project Portfolio have earned us market leader status in no time.<br />
Our vision is to make our environment optimistic and green with very advanced, revolutionary and sustainable solar products to make Pakistan brighter.</p>
            <img src="./images/about_image.png" alt="" className='h-auto w-96 text-center lg:text-left' />
        </div>
    </div>
  )
}

export default About