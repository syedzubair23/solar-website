import React from "react";
import ContactForm from "../components/ContactForm";
import Location from "../components/Location";
import { motion } from "framer-motion";
import { fadeIn, pageVariant, staggerContainer, textVariant } from "../utils/motion";

function ContactPage() {
  return (
    <motion.div variants={pageVariant} initial="hidden" animate="show" exit="exit" className="max-w-7xl mx-auto bg-[url('/images/contactpage-bgimage2.svg')] bg-no-repeat bg-[center_bottom_-5rem] md:bg-[center_bottom_6rem] lg:bg-[center_bottom_1.5rem] bg-[length:auto_878px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        // className="px-4 sm:px-6 lg:px-8 py-16 md:py-28 bg-[url('/images/contactpage-bgimage1.png')] bg-no-repeat bg-[top_right_-34rem] sm:bg-top bg-[length:auto_636px]"
        className="relative"
      >
        <img
          src="./images/contactpage-bgimage1.png"
          className="absolute -top-16 object-cover pointer-events-none h-[700px]"
          alt=""
        />
        <div className="space-y-16 sm:space-y-24 relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div>
            <motion.h2
              variants={textVariant(1.2)}
              className="font-fjalla_one text-5xl sm:text-7xl lg:text-8xl text-[#9FE221] tracking-wide"
            >
              Get in touch
            </motion.h2>
            <motion.p
              variants={textVariant(1.3)}
              className="font-poppins text-base sm:text-lg text-white/90 max-w-prose mt-4"
            >
              We are providing 24/7 customer service. If you have any sort of
              confusion or you need guidance, we are always willing to help you
              out. Please feel free to contact us.
            </motion.p>
          </div>
          <motion.div variants={fadeIn("left", "tween", 1.4, 1)}>
            <ContactForm />
          </motion.div>
          <Location />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ContactPage;
