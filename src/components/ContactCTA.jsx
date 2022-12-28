import React from 'react'
import Button from './Button'

function ContactCTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='font-poppins space-y-8 pb-16 md:pb-28'>
            <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-10 p-10 md:p-16 [background:linear-gradient(_90deg,_rgba(13,32,38,0.8)_0%,_#1E404B_100%)] rounded-xl shadow-[0px_0px_53px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-y-4">
                    <h3 className='text-3xl sm:text-4xl text-center md:text-left tracking-wide font-fjalla_one text-[#D9F4FD] leading-tight max-w-[24ch] capitalize'>Call us today for free
    consultations</h3>
                    <p className='text-sm text-center md:text-left text-[#D9F4FD]/50'>Give us 10 minutes, and we'll evaluate your savings potential.</p>
                </div>
                <Button styles={'shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-sm'} button_text={'Call +92 123 1233212'} />
            </div>
        </div>
    </div>
  )
}

export default ContactCTA