import React, { useEffect } from "react";
import { motion, spring } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { staggerContainer, textVariant2 } from "../utils/motion";

const testimonials = [
    {
        id: 1,
        image: 'testimonial-image1',
        name: 'Engr. Zubair',
        role: 'Leader & Founder',
        comment: 'The SZSolar team have demonstrated a strong commitment to customer service.'
    },
    {
        id: 2,
        image: 'testimonial-image2',
        name: 'Dr. Faseeha',
        role: 'CEO & Leader',
        comment: 'I was extremely pleased with my service with SZSolar Solutions. They are thougrouly professional.'
    },
    {
        id: 3,
        image: 'testimonial-image3',
        name: 'Engr. Nabeel',
        role: 'Creator & Designer',
        comment: 'SZSolar provide top-notch solar installation service. I would highly recommend them.'
    },
    {
        id: 4,
        image: 'testimonial-image4',
        name: 'Syeda Zara',
        role: 'Developer',
        comment: 'The SZSolar team is throughly professional. They guide you in the best possible way.'
    },
    {
        id: 5,
        image: 'testimonial-image5',
        name: 'Rehman Ali',
        role: 'Constructor',
        comment: 'The whole setup was installed in a day by SZSolar team. They are efficient and skilled professionals.'
    },
]

function Testimonials() {
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0)
  const crousel = useRef()

  useEffect(() => {
    setWidth(crousel.current.scrollWidth - crousel.current.offsetWidth)
  }, [])

  useEffect(() => {
      setTimeout(() => {
          setPosition(position + 1)
          if (position === testimonials.length - 1) {
            setPosition(0)
          }
        }, [1500])
  }, [position])
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
      <div
        className="font-poppins space-y-20">
        <motion.h2 variants={textVariant2} className="font-fjalla_one tracking-wide text-3xl leading-snug md:leading-tight sm:text-5xl mx-auto lg:mx-0 max-w-[17ch] text-[#9FE221] text-center lg:text-left">
        What people are saying about us
        </motion.h2>
        <motion.div 
          ref={crousel}
          className="overflow-hidden cursor-grab max-w-5xl mx-auto">
          <motion.div 
            className="flex gap-x-6"
            drag="x" dragConstraints={{right: 0, left: -width}}
            whileTap={{cursor:"grabbing"}}
          >
            {testimonials.map((testimonial, index)=> {
              return  <motion.div key={testimonial.id} 
                className={`space-y-8 group transition delay-100 ease-in-out ${index === position ? '[background:linear-gradient(144.39deg,_#F3FAFC_-278.56%,_#6C8791_-110.98%,_#06191F_87.63%)]' : '[background:none]'} rounded-[20px] p-8 min-w-[320px]`}
                initial={{scale: 0}}
                animate={{
                  scale: index === position ? 1 : 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >{ console.log( index, position)}
                <div className="flex flex-col place-content-center">
                <img
                    src={`./images/${testimonial.image}.png`}
                    className="w-[84px] mx-auto pointer-events-none"
                    alt=""
                />
                <h3 className="mt-1.5 text-lg text-center text-[#D9F4FD]">
                    {testimonial.name}
                </h3>
                <h4 className="text-sm leading-none text-center text-[#D9F4FD]/50">
                    {testimonial.role}
                </h4>
                </div>
                <img
                src="./images/testimonial-quotationmark.png"
                className="h-6 w-auto"
                alt=""
                />
                <p className="text-base text-center px-1 leading-relaxed tracking-wide text-[#D9F4FD]">
                {testimonial.comment}{" "}
                </p>
                </motion.div>
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
