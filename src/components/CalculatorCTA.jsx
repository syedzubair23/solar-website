import React from 'react'

function CalculatorCta() {
  return (
    <div className='font-poppins space-y-8 pb-16 md:pb-28'>
        <div className="flex justify-between items-center gap-8 p-16 bg-white/10 rounded-xl shadow-[0px_0px_40px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-y-6">
                <h3 className='text-4xl font-semibold text-[#D9F4FD] leading-tight max-w-[24ch]'>Confused? Use SZSolar's Estimated Bill Calculator</h3>
                <p className='text-sm text-[#D9F4FD]'>We have developed a calculator that asks you different types of products
                    which are required to install a solar system, then it calculates the estimate
                    bill according to your selected items.</p>
                <div className='mt-2 text-sm font-semibold bg-white/5 w-[100px] h-[100px] border border-gray-400 rounded-full'>
                    <p className='text-center'>Calculator</p>
                </div>
            </div>
            <div>
                <img src="./images/calculatorcta-image.png" className='max-w-[357px]' alt="" />
            </div>
        </div>
    </div>
  )
}

export default CalculatorCta