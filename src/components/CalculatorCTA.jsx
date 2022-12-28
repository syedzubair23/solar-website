import React from 'react'

function CalculatorCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='font-poppins space-y-8 pb-16 md:pb-28'>
            <div className="flex flex-col md:flex-row md:justify-between items-center justify-center gap-x-8 gap-y-12 py-8 px-4 md:p-16 bg-white/10 rounded-xl shadow-[0px_0px_40px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-y-6 md:gap-y-8">
                    <h3 className='text-2xl lg:text-4xl text-center md:text-left font-semibold text-[#D9F4FD] mx-auto md:max-w-none leading-tight max-w-[24ch]'>Confused? Use SZSolar's Estimated Bill Calculator</h3>
                    <p className='text-sm text-[#D9F4FD] text-center md:text-left mx-auto md:max-w-none max-w-prose'>We have developed a calculator that asks you different types of products
                        which are required to install a solar system, then it calculates the estimate
                        bill according to your selected items.</p>
                    <div className='mt-6 md:mt-8 self-center md:self-start flex items-center justify-center text-[#D9F4FD] text-sm font-semibold bg-white/5 shadow-[0px_0px_16px_rgba(0,0,0,0.25)] w-[100px] h-[100px] border border-gray-400 rounded-full'>
                        Calculator
                    </div>
                </div>
                <div>
                    <img src="./images/calculatorcta-image.png" className='aspect-w-1 aspect-h-1 max-w-[230px] lg:max-w-[330px] h-auto' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CalculatorCTA