import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'
import Button from './Button'

function ContactCTA() {
  return (
    <section className="bg-[url('/images/contactcta-bgimage.png')] bg-no-repeat bg-top max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 mb-20 md:mb-32">
        <div className='font-poppins space-y-8 max-w-5xl mx-auto'>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: "0.25" }} className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-10 p-10 md:p-16 [background:linear-gradient(_90deg,_rgba(13,32,38,0.8)_0%,_#1E404B_100%)] rounded-xl shadow-[0px_0px_53px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col gap-y-4">
                    <motion.h3 variants={fadeIn('right', 'spring', 0.2, 1)} className='text-3xl sm:text-4xl text-center md:text-left tracking-wide font-fjalla_one text-[#D9F4FD] leading-tight max-w-[24ch] capitalize'>Call us today for free
    consultations</motion.h3>
                    <motion.p variants={fadeIn('right', 'spring', 0.3, 1)} className='text-sm text-center md:text-left text-[#D9F4FD]/50 leading-relaxed'>Give us 10 minutes, and we'll evaluate your savings potential.</motion.p>
                </div>
                <motion.div variants={zoomIn(0.5, 0.7)}>
                    <Button styles={'shadow-[0px_4px_8px_rgba(0,0,0,0.25)] text-sm text-white'} button_text={'Call +92 123 1233212'} />
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default ContactCTA