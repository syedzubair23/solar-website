import React from 'react'

function Brands() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-28 py-16 sm:py-28 shadow-[0px_0px_40px_rgba(0,0,0,0.25)] bg-[#041014]/10 bg-[url('./images/brands-bgimage4.svg')] bg-no-repeat bg-[center_right_2rem] bg-[length:280px_400px] sm:bg-[length:auto_500px]">
        <div className='flex flex-col lg:flex-row gap-y-12 gap-x-1 items-center justify-center lg:justify-between max-w-5xl mx-auto'>
            <h2 className='font-fjalla_one leading-tight text-4xl sm:text-5xl font-semibold text-[#9FE221] text-center lg:text-left max-w-[16ch] lg:max-w-[14ch]'>We offer some of the prestigious brands</h2>
            <div className="flex md:flex-col gap-6 w-auto place-content-center">
                <div className='flex flex-col md:flex-row gap-6 items-center justify-start'>
                    <img src="./images/canadiansolar-logo.svg" alt="" className='md:max-h-10 w-auto' />
                    <img src="./images/solis-logo.svg" alt="" className='md:max-h-10 w-auto' />
                    <img src="./images/fronius-logo.svg" alt="" className='md:max-h-10 w-auto' />
                </div>
                <div className='flex flex-col md:flex-row gap-6 items-center justify-start'>
                    <img src="./images/longi-logo.svg" alt="" className='md:max-h-10 w-auto' />
                    <img src="./images/solarmax-logo.svg" alt="" className='md:max-h-10 w-auto' />
                    <img src="./images/tesla-logo.svg" alt="" className='md:max-h-10 w-auto' />
                </div>
                <div className='flex flex-col md:flex-row gap-6 items-center justify-start'>
                    <img src="./images/jasolar-logo.svg" alt="" className='md:max-h-10 w-auto' />
                    <img src="./images/abb-logo.svg" alt="" className='md:max-h-10 w-auto' />
                    <img src="./images/inverex-logo.svg" alt="" className='md:max-h-10 w-auto' />
                </div>
            </div>
        </div>
        {/* <img src='./images/brands-bgimage3.png' className='absolute left-1/2 -translate-x-1/2 md:translate-x-0 top-[26%] sm:top-[33%] lg:top-[10%] max-w-[366px] h-64 w-full' /> */}
        {/* <div className="w-full absolute shadow-[0px_0px_40px_rgba(0,0,0,0.25)] bg-[#041014]/10 left-0 top-[5%] md:top-[13%] lg:top-0 min-h-[400px]"></div> */}
        {/* <img src='./images/brands-bgimage.png' className='absolute shadow-[0px_0px_40px_rgba(0,0,0,0.25)] left-0 top-[5%] sm:top-[13%] min-h-[400px] lg:-top-[7%] w-full' /> */}

        <div className="w-full absolute top-[4%] sm:top-[15%] lg:top-0 [background:linear-gradient(_101.27deg,_rgba(49,100,11,0.08)_0%,_rgba(120,187,33,0.08)_101.34%)] left-0 h-[400px] skew-y-12"></div>
    </div>
  )
}

export default Brands