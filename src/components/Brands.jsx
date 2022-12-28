import React from 'react'

function Brands() {
  return (
    <div className='flex flex-col lg:flex-row gap-y-12 gap-x-1 py-16 md:p-28 items-center justify-center lg:justify-between'>
        <h2 className='font-fjalla_one leading-tight text-4xl sm:text-5xl font-semibold text-[#9FE221] text-center lg:text-left max-w-[16ch] lg:max-w-[14ch]'>We offer some of the prestigious brands</h2>
        <div className="flex md:flex-col gap-6 w-auto place-content-center">
            <div className='flex flex-col md:flex-row gap-6 items-center justify-start'>
                <img src="./images/canadiansolar-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
                <img src="./images/solis-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
                <img src="./images/fronius-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
            </div>
            <div className='flex flex-col md:flex-row gap-6 items-center justify-start'>
                <img src="./images/longi-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
                <img src="./images/solarmax-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
                <img src="./images/tesla-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
            </div>
            <div className='flex flex-col md:flex-row gap-6 items-center justify-start'>
                <img src="./images/jasolar-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
                <img src="./images/abb-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
                <img src="./images/inverex-logo.svg" alt="" className='aspect-w-1 aspect-w-1 md:max-h-10 w-auto' />
            </div>
        </div>
    </div>
  )
}

export default Brands