import React from 'react'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'

function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto bg-[url('/images/contactpage-bgimage2.svg')] bg-no-repeat bg-[center_bottom_-5rem] md:bg-[center_bottom_6rem] lg:bg-[center_bottom_1.5rem] bg-[length:auto_878px]">
    <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-28 bg-[url('/images/contactpage-bgimage1.png')] bg-no-repeat bg-[top_right_-34rem] sm:bg-top bg-[length:auto_636px]">
        <div className="space-y-16 sm:space-y-28">
            <div>
                <h2 className='font-fjalla_one text-5xl sm:text-7xl lg:text-8xl text-[#9FE221] tracking-wide'>Get in touch</h2>
                <p className='font-poppins text-base sm:text-lg text-white/70 max-w-prose mt-4'>We are providing 24/7 customer service. If you have any sort of confusion or you need guidance, we are always willing to help you out. Please feel free to contact us.</p>
            </div>
              <ContactForm />
              <Location />
        </div>
    </div>
  </div>
  )
}

export default ContactPage