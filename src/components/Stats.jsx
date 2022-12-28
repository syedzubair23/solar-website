import React from 'react'
import { BoltIcon, BoltSlashIcon, CurrencyDollarIcon, CurrencyRupeeIcon, PencilIcon, PencilSquareIcon, UserGroupIcon } from '@heroicons/react/20/solid'

function Stats() {
  return (
    <div className='font-poppins space-y-20 pb-16 md:pb-28'>
        <div className='space-y-10'>
            <h2 className='font-fjalla_one tracking-wide text-3xl leading-snug md:leading-tight sm:text-5xl mx-auto md:mx-0 max-w-[17ch] text-[#9FE221] text-center md:text-left'>We are Pakistan's Famous Solar Brand</h2>
            <p className='text-base text-[#D9F4FD] text-center md:text-left mx-auto md:mx-0 max-w-prose'>We are providing solar solutions in Pakistan since 2012. We have satisfied clients all over the Pakistan. Our skillful engineers are always cooperative and give clear guidance to customers. We have almost installed 650+ projects ranging from domestic to industrial projects in all these years.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14 justify-items-center px-8 py-4 bg-[#041014] rounded-3xl'>
            <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-white/5 border box-border border-[#6A6A6A] flex place-content-center pb-6 pr-6">
                <div className='flex flex-col gap-2 items-center justify-center -rotate-45'>
                    <UserGroupIcon className='w-12 h-12 text-[#820C0C]' />
                    <h3 className='text-white text-[32px] font-semibold leading-none text-center pt-1'>500,000+</h3>
                    <p className='text-[#869A77] text-sm text-center font-medium leading-none'>Satisfied Clients</p>
                </div>
            </div>
            <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-[#04303F] flex place-content-center pb-6 pr-6">
                <div className='flex flex-col gap-2 items-center justify-center -rotate-45'>
                    <PencilSquareIcon className='w-12 h-12 text-[#80DCFA]' />
                    <h3 className='text-white text-[32px] font-semibold leading-none text-center pt-1'>650+</h3>
                    <p className='text-[#869A77] text-sm text-center font-medium leading-none'>Projects Completed</p>
                </div>
            </div>
            <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-white/5 border box-border border-[#6A6A6A] flex place-content-center pb-6 pr-6">
                <div className='flex flex-col gap-2 items-center justify-center -rotate-45'>
                    <BoltIcon className='w-12 h-12 text-[#E2E221]' />
                    <h3 className='text-white text-[32px] font-semibold leading-none text-center pt-1'>10mw+</h3>
                    <p className='text-[#869A77] text-sm text-center font-medium leading-none'>Electricity Produced</p>
                </div>
            </div>
            <div className="w-[196px] h-[196px] rounded-[64px] rotate-45 shadow-[0px_0px_22px_rgba(0,0,0,0.25)] bg-[#04303F] box-border flex place-content-center pb-6 pr-6">
                <div className='flex flex-col gap-2 items-center justify-center -rotate-45'>
                    <CurrencyDollarIcon className='w-12 h-12 text-[#48B48D]' />
                    <h3 className='text-white text-[32px] font-semibold leading-none text-center pt-1'>54m+</h3>
                    <p className='text-[#869A77] text-sm text-center font-medium leading-none'>Rupees Saved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats