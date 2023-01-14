import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, textVariant2 } from "../utils/motion";
import Marquee from "react-fast-marquee";
import { testimonials } from "../constants";

function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className="font-poppins space-y-20"
      >
        <motion.h2
          variants={textVariant2}
          className="font-fjalla_one tracking-wide text-3xl leading-snug md:leading-tight sm:text-5xl mx-auto lg:mx-0 max-w-[17ch] text-[#9FE221] text-center lg:text-left"
        >
          What people are saying about us
        </motion.h2>
        <Marquee
          speed={100}
          pauseOnHover={true}
          gradientColor={[4, 16, 20]}
          gradientWidth={200}
        >
          <div className="flex gap-x-10">
            {testimonials.map((testimonial, index) => {
              return (
                <div
                  key={testimonial.id}
                  className={`space-y-8 group transition delay-100 ease-in-out [background:none] hover:[background:linear-gradient(144.39deg,_#F3FAFC_-278.56%,_#6C8791_-110.98%,_#06191F_87.63%)] rounded-[20px] p-8 max-w-[320px]`}
                >
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
                </div>
              );
            })}
          </div>
        </Marquee>
      </motion.div>
    </section>
  );
}

export default Testimonials;
